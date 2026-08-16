import { ArrowUp } from "lucide-react";
import { portfolio } from "@/src/data/portfolio";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-signature">
        <span className="wordmark-mark">{portfolio.profile.monogram}</span>
        <div>
          <strong>{portfolio.profile.name}</strong>
          <span>{portfolio.profile.role}</span>
        </div>
      </div>
      <p>Designed to evolve with verified products, systems, and milestones.</p>
      <a href="#overview">
        Back to top <ArrowUp size={15} aria-hidden="true" />
      </a>
    </footer>
  );
}
