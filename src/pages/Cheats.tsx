import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { GamepadIcon, ShieldIcon, BoltIcon } from "@/components/icons";

const cheats = [
  {
    game: "Kahoot",
    tool: "K-Bot",
    desc: "Fully automated answer bot that joins games, reads questions, and selects correct answers instantly. Supports both classic and team modes.",
    features: ["Auto-answer", "Score manipulation", "Multi-game support"],
    status: "operational",
  },
  {
    game: "Blooket",
    tool: "X-GUI",
    desc: "Complete graphical user interface overlay for Blooket. Unlock all blooks, manipulate tokens, and dominate any game mode with ease.",
    features: ["Token generator", "Blook unlocker", "Game mode exploits"],
    status: "operational",
  },
  {
    game: "Blooket",
    tool: "X-Bot",
    desc: "Lightweight automated bot for Blooket that runs silently in the background. Perfect for hands-free grinding and farming.",
    features: ["Auto-play", "Silent mode", "Background execution"],
    status: "operational",
  },
  {
    game: "Quizizz",
    tool: "QuizWare",
    desc: "Intelligent answer engine with built-in stealth technology. Provides answers with configurable accuracy to avoid suspicion.",
    features: ["Stealth mode", "Accuracy control", "Live answers"],
    status: "operational",
  },
  {
    game: "Wayground",
    tool: "Underground",
    desc: "Deep integration exploit suite for Wayground. Access hidden features, bypass restrictions, and unlock premium content.",
    features: ["Deep integration", "Bypass engine", "Content unlocker"],
    status: "maintenance",
  },
  {
    game: "IXL",
    tool: "IXploit",
    desc: "Automated problem solver that handles IXL assignments with configurable accuracy. Supports all subjects and grade levels.",
    features: ["Auto-solver", "All subjects", "Smart pacing"],
    status: "operational",
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Cheats = () => (
  <PageWrapper>
    <section className="max-w-7xl mx-auto px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-foreground mb-3">Cheats</h1>
        <p className="text-lg text-muted-foreground max-w-xl">Our complete arsenal of exploit tools, built for speed and stealth.</p>
      </motion.div>

      <motion.div variants={stagger} initial="hidden" animate="show" className="grid md:grid-cols-2 gap-5">
        {cheats.map((c) => (
          <motion.div key={c.tool} variants={fadeUp} className="glass-card p-7 hover-lift gradient-border group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">{c.game}</span>
                <h3 className="text-xl font-bold text-foreground mt-1">{c.tool}</h3>
              </div>
              <div className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                c.status === "operational"
                  ? "bg-success/10 text-success"
                  : "bg-warning/10 text-warning"
              }`}>
                {c.status}
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{c.desc}</p>
            <div className="flex flex-wrap gap-2">
              {c.features.map((f) => (
                <span key={f} className="px-3 py-1 rounded-lg bg-secondary text-xs text-secondary-foreground font-medium">
                  {f}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
    <Footer />
  </PageWrapper>
);

export default Cheats;
