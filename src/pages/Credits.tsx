import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { Terminal, Code2, Cpu, Shield, Bug, Users, Blocks, Globe, Zap, Chrome, FileCode2, Github, Heart } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  icon: LucideIcon;
  contributions: number;
}

const team: TeamMember[] = [
  { name: "xDev", role: "Lead Developer", icon: Terminal, contributions: 842 },
  { name: "PhantomJS", role: "Frontend", icon: Code2, contributions: 631 },
  { name: "ByteShift", role: "Backend", icon: Cpu, contributions: 574 },
  { name: "NullPtr", role: "Security", icon: Shield, contributions: 423 },
  { name: "ShadowOp", role: "QA & Testing", icon: Bug, contributions: 318 },
  { name: "CipherX", role: "Community", icon: Users, contributions: 256 },
];

const techStack = [
  { name: "TypeScript", icon: FileCode2 },
  { name: "React", icon: Blocks },
  { name: "Node.js", icon: Globe },
  { name: "Python", icon: Terminal },
  { name: "WebSocket", icon: Zap },
  { name: "Chrome Ext", icon: Chrome },
  { name: "Tampermonkey", icon: Code2 },
];

const stats = [
  { label: "Active Users", value: "12K+" },
  { label: "Tools Shipped", value: "6" },
  { label: "Uptime", value: "99.8%" },
  { label: "Commits", value: "3K+" },
];

const Credits = () => (
  <PageWrapper>
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[180px] pointer-events-none" />

    <section className="max-w-5xl mx-auto px-6 py-20 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
        <h1 className="text-4xl md:text-5xl font-black text-foreground mb-3">Credits</h1>
        <p className="text-muted-foreground max-w-md">The people and tech behind X-NETWORK.</p>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="glass-card p-1 mb-10 grid grid-cols-2 sm:grid-cols-4"
      >
        {stats.map((s, i) => (
          <div key={s.label} className={`px-5 py-4 text-center ${i < stats.length - 1 ? "border-r border-glass-border" : ""}`}>
            <div className="text-xl font-black gradient-text">{s.value}</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Team grid */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.05 } } }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16"
      >
        {team.map((t, i) => (
          <motion.div
            key={t.name}
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
            className="glass-card p-5 hover-lift group relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/0 group-hover:bg-primary/8 rounded-full blur-2xl transition-all duration-500" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                  <t.icon className="w-4.5 h-4.5 text-primary/70" />
                </div>
                <span className="text-[10px] text-muted-foreground font-mono">{t.contributions} commits</span>
              </div>
              <h3 className="text-sm font-bold text-foreground mb-0.5">{t.name}</h3>
              <span className="text-[10px] text-primary/60 font-semibold uppercase tracking-wider">{t.role}</span>

              {/* Mini bar chart */}
              <div className="mt-4 h-1 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary/60 to-primary/30"
                  initial={{ width: 0 }}
                  animate={{ width: `${(t.contributions / 842) * 100}%` }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.6, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Tech stack */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-lg font-bold text-foreground mb-4">Built With</h2>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-secondary/60 border border-glass-border text-xs font-medium text-secondary-foreground hover:bg-secondary transition-colors">
              <tech.icon className="w-3.5 h-3.5 text-muted-foreground" />
              {tech.name}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
          Made with <Heart className="w-3 h-3 text-primary fill-primary" /> by the X-NETWORK team
        </p>
      </motion.div>
    </section>
    <Footer />
  </PageWrapper>
);

export default Credits;
