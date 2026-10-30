import { useState } from "react";
import MedicineIcon from "./MedicineIcon";

export default function MedicineCard({ medicine, onOrder }) {
  const [imageFailed, setImageFailed] = useState(false);

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
      <div className={`pic${medicine.image && !imageFailed ? " has-image" : ""}`}>
        {medicine.image && !imageFailed ? (
          <img
            src={medicine.image}
            alt={medicine.imageAlt || (
              medicine.name === "Ibuprofen"
                ? "ibuprofen tablets"
                : medicine.name === "Artemether-Lumefantrine"
                  ? "artemether-lumefantrine tablets"
                  : medicine.name === "Amoxicillin"
                      ? "amoxicillin tablets"
                      : medicine.name === "Oral Rehydration Salts"
                        ? "oral rehydration salt tablets"
                        : medicine.name === "Antacid Tablets"
                          ? "Antacid tablets"
                            : medicine.name === "Loratadine"
                              ? "Loratadine 10 mg tablets box"
                              : medicine.name === "Vitamin C and Zinc"
                                ? "Vitamin C with zinc supplement bottle"
                                : "Paracetamol tablets"
            )}
            width="320"
            height="140"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <MedicineIcon kind={medicine.imageKind} color={medicine.imageColor} />
        )}
      </div>
      <h3>{medicine.name}</h3>
      <span className={`medicine-tag${medicine.type === "Prescription only" ? " is-prescription" : ""}`}>{medicine.type}</span>
      <p className="medicine-detail"><strong>Used for: </strong>{medicine.usedFor}</p>
      <p className="medicine-detail"><strong>How to take: </strong>{medicine.howToTake}</p>
      <p className="medicine-detail"><strong>Careful: </strong>{medicine.caution}</p>
      <span className="order-this">Order this →</span>
    </article>
  );
}