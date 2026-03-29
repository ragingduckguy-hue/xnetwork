import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { ShieldIcon, BoltIcon, UsersIcon, ArrowRightIcon } from "@/components/icons";

const cheats = [
  { game: "Kahoot", tool: "K-Bot", desc: "Automated answer bot with instant responses" },
  { game: "Blooket", tool: "X-GUI / X-Bot", desc: "Full GUI overlay and automated gameplay" },
  { game: "Quizizz", tool: "QuizWare", desc: "Smart answer engine with stealth mode" },
  { game: "Wayground", tool: "Underground", desc: "Deep integration exploit suite" },
  { game: "IXL", tool: "IXploit", desc: "Automated problem solver with accuracy control" },
];

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "99.8%", label: "Uptime" },
  { value: "5", label: "Supported Games" },
  { value: "24/7", label: "Support" },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Index = () => (
  <PageWrapper>
    {/* Hero */}
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 py-32 md:py-44 relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary">All systems operational</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            <span className="text-foreground">The</span>{" "}
            <span className="gradient-text">X-NETWORK</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Premium exploit tools for educational platforms. Undetected, fast, and reliable.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Link
              to="/cheats"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Browse Cheats
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              to="/status"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm hover:bg-secondary/80 transition-colors border border-glass-border"
            >
              Check Status
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {stats.map((s) => (
          <motion.div key={s.label} variants={fadeUp} className="glass-card p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-1">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>

    {/* Features */}
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-4"
      >
        {[
          { icon: ShieldIcon, title: "Undetected", desc: "Advanced evasion keeps you safe from detection systems." },
          { icon: BoltIcon, title: "Instant", desc: "Sub-second response times across all supported platforms." },
          { icon: UsersIcon, title: "Community", desc: "Join thousands of users in our growing network." },
        ].map((f) => (
          <motion.div key={f.title} variants={fadeUp} className="glass-card p-8 hover-lift group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>

    {/* Cheats preview */}
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-10 flex items-end justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Our Tools</h2>
          <p className="text-muted-foreground">Premium exploits for every platform.</p>
        </div>
        <Link to="/cheats" className="text-sm text-primary hover:text-primary/80 transition-colors hidden md:flex items-center gap-1">
          View all <ArrowRightIcon className="w-3.5 h-3.5" />
        </Link>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {cheats.map((c) => (
          <motion.div key={c.tool} variants={fadeUp} className="glass-card p-6 hover-lift gradient-border">
            <div className="text-xs font-mono text-primary/70 mb-2">{c.game}</div>
            <h3 className="text-lg font-bold text-foreground mb-1">{c.tool}</h3>
            <p className="text-sm text-muted-foreground">{c.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>

    <Footer />
  </PageWrapper>
);

export default Index;
