import { useRef } from "react";
import { CartProvider, useCart } from "./context/CartContext";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Services from "./components/Services";
import MedicineSection from "./components/MedicineSection";
import OrderForm from "./components/OrderForm";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

function PharmacySite() {
  const orderSectionRef = useRef(null);
  const nameInputRef = useRef(null);
  const { addToCart } = useCart();

  function handleMedicineOrder(name) {
    addToCart(name);
    orderSectionRef.current?.scrollIntoView({ block: "start" });
    nameInputRef.current?.focus({ preventScroll: true });
  }

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="container" id="top">
        <Hero />
        <TrustStrip />
        <Services />
        <MedicineSection onOrder={handleMedicineOrder} />
        <div ref={orderSectionRef}>
          <OrderForm nameInputRef={nameInputRef} />
        </div>
      </main>
      <Visit />
      <Footer />
    </>
  );
}

export default function App() {
  return <CartProvider><PharmacySite /></CartProvider>;
}
