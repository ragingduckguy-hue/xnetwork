import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-glass-border mt-20">
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-primary">
            <path d="M2 2L8 8M8 8L14 2M8 8L2 14M8 8L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <span className="text-sm font-semibold text-foreground">X-NETWORK</span>
      </div>
      <div className="flex items-center gap-6">
        {["Home", "Cheats", "Status", "Reviews", "Credits"].map((item) => (
          <Link
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        &copy; 2026 X-NETWORK. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
