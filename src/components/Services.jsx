const services = [
  { title: "Prescription dispensing", description: "Careful dispensing of your prescribed medicines.", icon: <><path d="M8 3h8l1 3H7l1-3Z" /><path d="M6 6h12l1 15H5L6 6Z" /><path d="M12 10v7m-3.5-3.5h7" /></> },
  { title: "Over-the-counter medicines", description: "Everyday relief for common health needs.", icon: <><path d="M8 4h8v3l2 2v11H6V9l2-2V4Z" /><path d="M8 7h8m-4 3v6m-3-3h6" /></> },
  { title: "Pharmacist advice", description: "Get guidance about medicines and your health.", icon: <><path d="M4 20v-1a8 8 0 0 1 16 0v1" /><circle cx="12" cy="8" r="4" /><path d="M12 6v4m-2-2h4" /></> },
  { title: "Order by WhatsApp", description: "Send us an enquiry or medicine order by WhatsApp.", icon: <><path d="M20 11.5a7.5 7.5 0 0 1-11.2 6.5L4 19l1-4.4A7.5 7.5 0 1 1 20 11.5Z" /><path d="M9 9.5c.5 1.8 1.7 3 3.5 3.5" /></> }
];

export default function Services() {
  return (
    <section className="services-section" aria-labelledby="services-title">
      <div className="section-heading">
        <h2 id="services-title">Our services</h2>
        <p>Everything you need for your health, under one roof.</p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card card" key={service.title}>
            <span className="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{service.icon}</svg>
            </span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}