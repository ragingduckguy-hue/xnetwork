import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { type LucideIcon } from "lucide-react";
import { Zap, Shield, Bot, Brain, Gamepad2, Globe } from "lucide-react";

// Game logo SVG components
const KahootLogo = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10">
    <rect width="40" height="40" rx="10" fill="hsl(265 85% 60% / 0.1)" />
    <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fill="hsl(265 85% 70%)" fontSize="16" fontWeight="800" fontFamily="system-ui">K!</text>
  </svg>
);

const BlooketLogo = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10">
    <rect width="40" height="40" rx="10" fill="hsl(265 85% 60% / 0.1)" />
    <rect x="10" y="10" width="20" height="20" rx="5" stroke="hsl(265 85% 70%)" strokeWidth="2" fill="none" />
    <circle cx="20" cy="20" r="4" fill="hsl(265 85% 70%)" />
  </svg>
);

const QuizizzLogo = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10">
    <rect width="40" height="40" rx="10" fill="hsl(265 85% 60% / 0.1)" />
    <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fill="hsl(265 85% 70%)" fontSize="18" fontWeight="800" fontFamily="system-ui">Q</text>
  </svg>
);

const IXLLogo = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10">
    <rect width="40" height="40" rx="10" fill="hsl(265 85% 60% / 0.1)" />
    <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fill="hsl(265 85% 70%)" fontSize="12" fontWeight="800" fontFamily="system-ui">IXL</text>
  </svg>
);

const WaygroundLogo = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10">
    <rect width="40" height="40" rx="10" fill="hsl(265 85% 60% / 0.1)" />
    <path d="M10 25L15 15L20 22L25 12L30 25" stroke="hsl(265 85% 70%)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const cheats = [
  {
    game: "Kahoot",
    tool: "K-Bot",
    desc: "Fully automated answer bot — joins games, reads questions, and selects correct answers instantly.",
    features: ["Auto-answer", "Score manipulation", "Multi-game"],
    status: "operational" as const,
    icon: Bot,
    logo: KahootLogo,
  },
  {
    game: "Blooket",
    tool: "X-GUI",
    desc: "Complete graphical overlay for Blooket. Unlock all blooks, manipulate tokens, dominate any mode.",
    features: ["Token gen", "Blook unlocker", "Mode exploits"],
    status: "operational" as const,
    icon: Gamepad2,
    logo: BlooketLogo,
  },
  {
    game: "Blooket",
    tool: "X-Bot",
    desc: "Lightweight bot that runs silently in the background. Perfect for hands-free grinding.",
    features: ["Auto-play", "Silent mode", "Background exec"],
    status: "operational" as const,
    icon: Zap,
    logo: BlooketLogo,
  },
  {
    game: "Quizizz",
    tool: "QuizWare",
    desc: "Intelligent answer engine with built-in stealth. Configurable accuracy to avoid suspicion.",
    features: ["Stealth mode", "Accuracy ctrl", "Live answers"],
    status: "operational" as const,
    icon: Brain,
    logo: QuizizzLogo,
  },
  {
    game: "Wayground",
    tool: "Underground",
    desc: "Deep integration exploit suite. Access hidden features, bypass restrictions, unlock premium.",
    features: ["Deep integration", "Bypass engine", "Unlocker"],
    status: "maintenance" as const,
    icon: Globe,
    logo: WaygroundLogo,
  },
  {
    game: "IXL",
    tool: "IXploit",
    desc: "Automated problem solver for all IXL subjects and grade levels with smart pacing.",
    features: ["Auto-solver", "All subjects", "Smart pacing"],
    status: "operational" as const,
    icon: Shield,
    logo: IXLLogo,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Cheats = () => (
  <PageWrapper>
    <section className="max-w-5xl mx-auto px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
        <h1 className="text-4xl md:text-5xl font-black text-foreground mb-3">Arsenal</h1>
        <p className="text-muted-foreground max-w-lg">Our complete suite of tools, built for speed and stealth.</p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        className="flex flex-col gap-3"
      >
        {cheats.map((c) => {
          const Logo = c.logo;
          const Icon = c.icon;
          return (
            <motion.div
              key={c.tool}
              variants={fadeUp}
              className="glass-card px-6 py-5 hover-lift group flex items-start gap-5 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/0 group-hover:bg-primary/8 rounded-full blur-3xl transition-all duration-500" />

              {/* Game logo */}
              <div className="flex-shrink-0 mt-0.5">
                <Logo />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 relative z-10">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-[10px] font-mono text-primary/50 uppercase tracking-widest">{c.game}</span>
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    c.status === "operational" ? "bg-success" : "bg-warning"
                  }`} />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-foreground tracking-tight">{c.tool}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {c.features.map((f) => (
                    <span key={f} className="px-2.5 py-0.5 rounded-md bg-secondary/80 text-[10px] text-secondary-foreground font-medium">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right icon */}
              <div className="hidden sm:flex flex-shrink-0 w-9 h-9 rounded-lg bg-primary/8 border border-primary/15 items-center justify-center group-hover:bg-primary/15 transition-all duration-300">
                <Icon className="w-4 h-4 text-primary/70" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
    <Footer />
  </PageWrapper>
);

export default Cheats;
