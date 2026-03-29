import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { Shield, Zap, Users, ArrowRight, ChevronRight, Activity, Clock, Gamepad2, Eye, Bot, Brain, Pickaxe, Calculator } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const cheats: { game: string; tool: string; desc: string; icon: LucideIcon }[] = [
  { game: "Kahoot", tool: "K-Bot", desc: "Automated answer bot with instant responses", icon: Bot },
  { game: "Blooket", tool: "X-GUI / X-Bot", desc: "Full GUI overlay and automated gameplay", icon: Gamepad2 },
  { game: "Quizizz", tool: "QuizWare", desc: "Smart answer engine with stealth mode", icon: Brain },
  { game: "Wayground", tool: "Underground", desc: "Deep integration exploit suite", icon: Pickaxe },
  { game: "IXL", tool: "IXploit", desc: "Automated problem solver with accuracy control", icon: Calculator },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const Index = () => (
  <PageWrapper>
    {/* Hero */}
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Layered background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[120px]" />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-8">
              <Activity className="w-3 h-3 text-primary" />
              <span className="text-[11px] font-semibold text-primary tracking-wide uppercase">All systems operational</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-[4.5rem] font-black tracking-[-0.03em] leading-[1.02] mb-6">
              <span className="gradient-text">X-NETWORK</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground max-w-md mb-10 leading-relaxed font-light">
              Premium exploit tools for educational platforms. Undetected, fast, and reliable.
            </motion.p>

            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <Link
                to="/cheats"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_30px_hsl(265_85%_60%/0.3)] transition-all duration-300"
              >
                Browse Cheats
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/status"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card/60 text-secondary-foreground font-semibold text-sm border border-glass-border hover:border-primary/30 transition-all duration-300"
              >
                Check Status
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Live stats widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="glass-card p-8 glow-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Live Dashboard</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Users, value: "50K+", label: "Active Users" },
                    { icon: Activity, value: "99.8%", label: "Uptime" },
                    { icon: Zap, value: "<15ms", label: "Avg Latency" },
                    { icon: Clock, value: "24/7", label: "Support" },
                  ].map((s) => (
                    <div key={s.label} className="bg-background/40 rounded-xl p-4 border border-glass-border/50">
                      <s.icon className="w-4 h-4 text-primary/60 mb-2" />
                      <div className="text-xl font-bold text-foreground">{s.value}</div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>5 tools active</span>
                  <span className="w-1 h-1 rounded-full bg-glass-border" />
                  <span>Last updated: just now</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Mobile stats */}
    <section className="lg:hidden max-w-7xl mx-auto px-6 pb-16">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-3"
      >
        {[
          { icon: Users, value: "50K+", label: "Active Users" },
          { icon: Activity, value: "99.8%", label: "Uptime" },
          { icon: Zap, value: "<15ms", label: "Avg Latency" },
          { icon: Clock, value: "24/7", label: "Support" },
        ].map((s) => (
          <motion.div key={s.label} variants={fadeUp} className="glass-card p-5">
            <s.icon className="w-4 h-4 text-primary/60 mb-2" />
            <div className="text-2xl font-bold text-foreground">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>

    {/* Why X-NETWORK */}
    <section className="max-w-7xl mx-auto px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-3 block">Why us</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Built different.</h2>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-5"
      >
        {[
          { icon: Shield, title: "Undetected", desc: "Advanced evasion technology keeps you invisible to every detection system." },
          { icon: Zap, title: "Instant", desc: "Sub-second response times. Our tools react faster than you can blink." },
          { icon: Eye, title: "Stealth", desc: "Configurable accuracy and pacing that mimics natural human behavior." },
        ].map((f) => (
          <motion.div key={f.title} variants={fadeUp} className="group relative">
            <div className="glass-card p-8 h-full hover-lift relative overflow-hidden">
              {/* Hover glow */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/0 group-hover:bg-primary/8 rounded-full blur-3xl transition-all duration-500" />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center mb-6 group-hover:bg-primary/15 group-hover:border-primary/25 transition-all duration-300">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2 tracking-tight">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>

    {/* Tools */}
    <section className="max-w-7xl mx-auto px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-end justify-between mb-12"
      >
        <div>
          <span className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-3 block">Arsenal</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Tools</h2>
        </div>
        <Link to="/cheats" className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors group">
          View all
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-3"
      >
        {cheats.map((c) => (
          <motion.div key={c.tool} variants={fadeUp}>
            <Link to="/cheats" className="glass-card px-6 py-5 flex items-center justify-between hover-lift group block">
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center group-hover:bg-primary/15 transition-colors shrink-0">
                  <c.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-foreground text-sm">{c.tool}</h3>
                    <span className="px-2 py-0.5 rounded-md bg-primary/8 text-[10px] font-semibold text-primary uppercase tracking-wider">{c.game}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">{c.desc}</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>

    {/* CTA */}
    <section className="max-w-7xl mx-auto px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-10 md:p-14 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">Join 50,000+ users already dominating with X-NETWORK tools.</p>
          <div className="flex items-center justify-center gap-3">
            <Link
              to="/cheats"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_30px_hsl(265_85%_60%/0.3)] transition-all duration-300"
            >
              Explore Cheats
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-card/60 text-secondary-foreground font-semibold text-sm border border-glass-border hover:border-primary/30 transition-all duration-300"
            >
              Read Reviews
            </Link>
          </div>
        </div>
      </motion.div>
    </section>

    <Footer />
  </PageWrapper>
);

export default Index;
