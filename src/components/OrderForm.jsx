import { useState } from "react";
import { useCart } from "../context/CartContext";
import { config } from "../data/config";
import { medicines } from "../data/medicines";
import { states } from "../data/states";

export default function OrderForm({ nameInputRef }) {
  const { cart, addToCart, changeQuantity, removeFromCart } = useCart();
  const [selectedMedicine, setSelectedMedicine] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [cartError, setCartError] = useState(false);
  const [confirmation, setConfirmation] = useState("");
  const hasPrescriptionOnly = cart.some((item) => medicines.find((medicine) => medicine.name === item.name)?.type === "Prescription only");
  const showCartError = cartError && cart.length === 0;

  function handleAddMedicine() {
    const parsedQuantity = Number.parseInt(quantity, 10);
    if (!selectedMedicine || !Number.isInteger(parsedQuantity) || parsedQuantity < 1) return;
    addToCart(selectedMedicine, parsedQuantity);
    setSelectedMedicine("");
    setQuantity("1");
    setCartError(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setConfirmation("");
    if (cart.length === 0) {
      setCartError(true);
      document.querySelector(".selected-medicines")?.scrollIntoView({ block: "center" });
      return;
    }
    if (!event.currentTarget.reportValidity()) return;

    const formData = new FormData(event.currentTarget);
    const message = [
      "Hello, I would like to place a medicine order.",
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      "Medicines:",
      ...cart.map((item) => `- ${item.name} x ${item.qty}`),
      `State: ${formData.get("state")}`,
      `LGA: ${formData.get("lga")}`,
      `Delivery address: ${formData.get("address")}`,
      `Notes: ${formData.get("notes") || "None"}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setConfirmation("Your order message is ready to send in WhatsApp.");
    setCartError(false);
  }

  return (
    <section className="order-section" id="order" aria-labelledby="order-title">
      <div className="section-heading">
        <h2 id="order-title">Order a medicine</h2>
        <p>Share your details and the medicines you need.</p>
      </div>
      <form className="order-form card" id="order-form" noValidate onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="customer-name">Full name</label>
            <input ref={nameInputRef} id="customer-name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="customer-phone">Phone</label>
            <input id="customer-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required />
          </div>
          <div className="field field-full">
            <label htmlFor="delivery-address">Delivery address</label>
            <input id="delivery-address" name="address" type="text" autoComplete="street-address" required />
          </div>
          <div className="field">
            <label htmlFor="customer-state">State</label>
            <select id="customer-state" name="state" required defaultValue="">
              <option value="">Select a state</option>
              {states.map((state) => <option value={state} key={state}>{state}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="customer-lga">Local Government Area</label>
            <input id="customer-lga" name="lga" type="text" placeholder="Type your local government" autoComplete="address-level2" required />
          </div>
          <div className="field field-full">
            <label htmlFor="order-notes">Optional notes</label>
            <textarea id="order-notes" name="notes" rows="3" />
          </div>
        </div>
        <div className="medicine-picker">
          <div className="field">
            <label htmlFor="medicine-select">Medicine</label>
            <select id="medicine-select" value={selectedMedicine} onChange={(event) => setSelectedMedicine(event.target.value)}>
              <option value="">Choose a medicine</option>
              {medicines.map((medicine) => <option value={medicine.name} key={medicine.name}>{medicine.name}</option>)}
            </select>
          </div>
          <div className="field quantity-field">
            <label htmlFor="medicine-quantity">Quantity</label>
            <input id="medicine-quantity" type="number" min="1" max="50" value={quantity} inputMode="numeric" onChange={(event) => setQuantity(event.target.value)} />
          </div>
          <button className="btn pri add-medicine" type="button" onClick={handleAddMedicine}>+ Add</button>
        </div>
        <section className={`selected-medicines${showCartError ? " has-error" : ""}`} aria-labelledby="selected-medicines-title">
          <h3 id="selected-medicines-title">Your selected medicines</h3>
          {cart.length > 0 && (
            <ul className="cart-list" aria-live="polite">
              {cart.map((item) => (
                <li className="cart-item" key={item.name}>
                  <strong>{item.name}</strong>
                  <div className="cart-controls">
                    <button type="button" aria-label={`Decrease quantity of ${item.name}`} onClick={() => { changeQuantity(item.name, -1); setCartError(false); }}>−</button>
                    <span className="cart-quantity" aria-label={`Quantity: ${item.qty}`}>{item.qty}</span>
                    <button type="button" aria-label={`Increase quantity of ${item.name}`} onClick={() => changeQuantity(item.name, 1)}>+</button>
                    <button className="cart-remove" type="button" aria-label={`Remove ${item.name}`} onClick={() => removeFromCart(item.name)}>✕</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {cart.length === 0 && <p className="cart-empty">No medicine added yet</p>}
          {hasPrescriptionOnly && <p className="prescription-warning">Prescription-only medicines require a valid prescription.</p>}
          {showCartError && <p className="cart-error" role="alert">Please add at least one medicine to your order.</p>}
        </section>
        <div className="form-actions">
          <button className="btn pri submit-order" type="submit">Send order on WhatsApp</button>
          {confirmation && <p className="order-confirmation" role="status" aria-live="polite">{confirmation}</p>}
        </div>
      </form>
    </section>
  );
}