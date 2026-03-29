import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Crosshair, Activity, MessageSquare, Users } from "lucide-react";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/cheats", label: "Cheats", icon: Crosshair },
  { path: "/status", label: "Status", icon: Activity },
  { path: "/reviews", label: "Reviews", icon: MessageSquare },
  { path: "/credits", label: "Credits", icon: Users },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav className="w-full max-w-2xl bg-card/80 backdrop-blur-2xl border border-glass-border rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.5),0_0_60px_hsl(265_85%_60%/0.06)]">
        <div className="px-4 h-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-primary/12 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 3L8 8L13 3" stroke="hsl(265, 85%, 70%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 13L8 8L13 13" stroke="hsl(265, 85%, 70%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[13px] font-extrabold tracking-tight text-foreground">
              X-NET
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-3 py-1.5 text-[12px] font-medium rounded-lg transition-all duration-300 flex items-center gap-1.5"
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-primary/8 border border-primary/15 rounded-lg"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                    />
                  )}
                  <Icon className={`relative z-10 w-3.5 h-3.5 transition-colors duration-300 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                  <span className={`relative z-10 transition-colors duration-300 ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-8 h-8 rounded-lg bg-secondary/60 flex items-center justify-center transition-colors hover:bg-secondary"
          >
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none" className="text-foreground">
              {mobileOpen ? (
                <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              ) : (
                <path d="M3 5H15M3 9H15M3 13H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-glass-border overflow-hidden"
            >
              <div className="px-3 py-2.5 flex flex-col gap-0.5">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
