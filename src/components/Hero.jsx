import { config } from "../data/config";
import MedicineIcon from "./MedicineIcon";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>Trusted medicines, close to home in Birnin Kebbi.</h1>
        <p>Everyday medicines and friendly pharmacist advice, right here in your community.</p>
        <div className="hero-actions">
          <a className="btn hero-order" href="#order">Order now</a>
          <a className="btn hero-call" href={`tel:${config.phoneLink}`}>Call {config.phone}</a>
          <a className="btn hero-outline" href="#medicines">Browse medicines</a>
        </div>
        <div className="hero-illustration" role="img" aria-label="Illustrations of a medicine capsule, bottle and tablet">
          <span className="hero-product"><MedicineIcon kind="capsule" color="#dc6c68" /></span>
          <span className="hero-product is-floating"><MedicineIcon kind="bottle" color="#ec9a48" /></span>
          <span className="hero-product"><MedicineIcon kind="tablet" color="#7bc6a5" /></span>
        </div>
      </div>
      <aside className="hero-facts" aria-label="Pharmacy details">
        <div className="hero-fact">
          <strong>{config.rating} Google rating</strong>
          <span>{config.reviewCount} reviews</span>
        </div>
        <div className="hero-fact">
          <strong>{config.closingTime}</strong>
          <span>Open daily until closing</span>
        </div>
      </aside>
    </section>
  );
}