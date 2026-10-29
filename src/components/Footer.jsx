import { config } from "../data/config";

export default function Footer() {
  return (
    <footer className="site-footer container">
      <p>© {config.name} · Birnin Kebbi, Nigeria</p>
    </footer>
  );
}