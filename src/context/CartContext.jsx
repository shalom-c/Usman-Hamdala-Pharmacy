import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(name, quantity = 1) {
    const safeQuantity = Math.min(50, Math.max(1, quantity));
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.name === name);
      if (existing) {
        return currentCart.map((item) => item.name === name
          ? { ...item, qty: Math.min(50, item.qty + safeQuantity) }
          : item);
      }
      return [...currentCart, { name, qty: safeQuantity }];
    });
  }

  function changeQuantity(name, change) {
    setCart((currentCart) => currentCart.flatMap((item) => {
      if (item.name !== name) return [item];
      const qty = item.qty + change;
      return qty < 1 ? [] : [{ ...item, qty: Math.min(50, qty) }];
    }));
  }

  function removeFromCart(name) {
    setCart((currentCart) => currentCart.filter((item) => item.name !== name));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, changeQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}