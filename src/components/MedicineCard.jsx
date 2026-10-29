import MedicineIcon from "./MedicineIcon";

export default function MedicineCard({ medicine, onOrder }) {
  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOrder(medicine.name);
    }
  }

  return (
    <article
      className="medicine-card card"
      data-name={medicine.name}
      role="button"
      tabIndex={0}
      aria-label={`Add ${medicine.name} to your order`}
      onClick={() => onOrder(medicine.name)}
      onKeyDown={handleKeyDown}
    >
      <div className="pic"><MedicineIcon kind={medicine.imageKind} color={medicine.imageColor} /></div>
      <h3>{medicine.name}</h3>
      <span className={`medicine-tag${medicine.type === "Prescription only" ? " is-prescription" : ""}`}>{medicine.type}</span>
      <p className="medicine-detail"><strong>Used for: </strong>{medicine.usedFor}</p>
      <p className="medicine-detail"><strong>How to take: </strong>{medicine.howToTake}</p>
      <p className="medicine-detail"><strong>Careful: </strong>{medicine.caution}</p>
      <span className="order-this">Order this →</span>
    </article>
  );
}