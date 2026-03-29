import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/cheats", label: "Cheats" },
  { path: "/status", label: "Status" },
  { path: "/reviews", label: "Reviews" },
  { path: "/credits", label: "Credits" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav className="w-full max-w-3xl bg-card/70 backdrop-blur-2xl border border-glass-border rounded-2xl shadow-[0_8px_40px_hsl(265_85%_60%/0.08),0_2px_12px_rgba(0,0,0,0.4)]">
        <div className="px-5 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-primary">
                <path d="M2 2L8 8M8 8L14 2M8 8L2 14M8 8L14 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-sm font-bold tracking-tight text-foreground">
              X-NETWORK
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-3.5 py-1.5 text-[13px] font-medium rounded-lg transition-colors"
              >
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-lg"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                  />
                )}
                <span className={`relative z-10 ${location.pathname === item.path ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 rounded-lg bg-secondary/60 flex items-center justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="text-foreground">
              {mobileOpen ? (
                <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              ) : (
                <path d="M3 5H15M3 9H15M3 13H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-glass-border overflow-hidden"
            >
              <div className="px-4 py-3 flex flex-col gap-0.5">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3.5 py-2.5 rounded-lg text-[13px] font-medium transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
