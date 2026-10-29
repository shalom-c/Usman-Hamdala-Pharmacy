import { config } from "../data/config";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav container" aria-label="Main navigation">
        <a className="brand" href="#top">
          <span className="logo-mark" aria-hidden="true">+</span>
          <span className="brand-name">{config.name}</span>
        </a>
        <ul className="nav-links">
          <li><a href="#medicines">Medicines</a></li>
          <li><a href="#order">Order</a></li>
          <li><a href="#visit">Visit us</a></li>
          <li><a className="btn pri" href={`tel:${config.phoneLink}`}>Call</a></li>
        </ul>
      </nav>
    </header>
  );
}