import { useState } from "react";
import { medicines } from "../data/medicines";
import MedicineCard from "./MedicineCard";

const filters = [
  { label: "All", value: "all" },
  { label: "Pain & fever", value: "pain" },
  { label: "Infection & malaria", value: "infection" },
  { label: "Stomach", value: "stomach" },
  { label: "Allergy & wellness", value: "allergy" }
];

export default function MedicineSection({ onOrder }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleMedicines = activeFilter === "all"
    ? medicines
    : medicines.filter((medicine) => medicine.category === activeFilter);

  return (
    <section className="medicine-section" id="medicines" aria-labelledby="medicine-title">
      <div className="section-heading">
        <h2 id="medicine-title">Medicine guide</h2>
        <p>Plain-language descriptions of common medicines we stock. Ask our pharmacist for the right one for you.</p>
      </div>
      <div className="filter-bar" role="group" aria-label="Filter medicines by category">
        {filters.map((filter) => (
          <button
            className={`filter-chip${activeFilter === filter.value ? " is-active" : ""}`}
            type="button"
            data-filter={filter.value}
            aria-pressed={activeFilter === filter.value}
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="medicine-grid" aria-live="polite">
        {visibleMedicines.map((medicine) => <MedicineCard key={medicine.name} medicine={medicine} onOrder={onOrder} />)}
      </div>
    </section>
  );
}