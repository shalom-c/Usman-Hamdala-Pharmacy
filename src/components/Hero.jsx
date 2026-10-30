import { config } from "../data/config";

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
        <img
          className="hero-photo"
          src="/images/hero.jpg"
          alt="Pharmacy medicines ready to help the local community"
          width="800"
          height="500"
        />
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