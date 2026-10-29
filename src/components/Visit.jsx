import { config } from "../data/config";

function ContactIcon({ children }) {
  return (
    <span className="contact-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
    </span>
  );
}

export default function Visit() {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Usman Hamdala Pharmacy Birnin Kebbi")}`;

  return (
    <section className="visit-section container" id="visit" aria-labelledby="visit-title">
      <div className="section-heading">
        <h2 id="visit-title">Visit us</h2>
        <p>We are here to help with your everyday medicine needs.</p>
      </div>
      <div className="visit-grid">
        <article className="visit-card card">
          <h3>{config.name}</h3>
          <div className="contact-row">
            <ContactIcon><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></ContactIcon>
            <span>{config.address}</span>
          </div>
          <div className="contact-row">
            <ContactIcon><path d="M21 16.5v3a1.5 1.5 0 0 1-1.6 1.5A18.5 18.5 0 0 1 3 4.6 1.5 1.5 0 0 1 4.5 3h3a1.5 1.5 0 0 1 1.5 1.3l.5 3a1.5 1.5 0 0 1-.4 1.3l-1.4 1.4a15 15 0 0 0 6.3 6.3l1.4-1.4a1.5 1.5 0 0 1 1.3-.4l3 .5a1.5 1.5 0 0 1 1.3 1.5Z" /></ContactIcon>
            <a href={`tel:${config.phoneLink}`}>{config.phone}</a>
          </div>
          <div className="contact-row">
            <ContactIcon><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></ContactIcon>
            <span>{config.hours}</span>
          </div>
          <a className="btn pri directions-link" href={directionsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
        </article>
        <article className="visit-card card">
          <h3>Good to know</h3>
          <p>Prescription-only medicines can only be supplied with a valid prescription. Ask our pharmacist if you are unsure which medicine is right for you.</p>
          <div className="disclaimer-box">
            <strong>Health information</strong>
            <p>Information on this website is educational and does not replace advice from a doctor or pharmacist. In an emergency, go to the nearest hospital.</p>
          </div>
        </article>
      </div>
    </section>
  );
}