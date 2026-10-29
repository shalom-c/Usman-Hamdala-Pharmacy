const trustItems = [
  { title: "Genuine medicines", icon: <><path d="M12 3 19 6v5c0 4.5-2.9 7.7-7 10-4.1-2.3-7-5.5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></> },
  { title: "Open late", icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></> },
  { title: "Pharmacist advice", icon: <><path d="M12 3v4M5.6 5.6l2.8 2.8M3 12h4m10 0h4m-2.6-6.4-2.8 2.8" /><circle cx="12" cy="15" r="5" /><path d="M10 15h4m-2-2v4" /></> }
];

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Why choose Usman Hamdala Pharmacy">
      {trustItems.map((item) => (
        <div className="trust-item card" key={item.title}>
          <span className="trust-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
          </span>
          <strong>{item.title}</strong>
        </div>
      ))}
    </section>
  );
}