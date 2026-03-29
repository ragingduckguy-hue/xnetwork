import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { Terminal, Code2, Cpu, Shield, Bug, Users, Blocks, Globe, Zap, Chrome, FileCode2 } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  icon: LucideIcon;
}

const team: TeamMember[] = [
  { name: "xDev", role: "Lead Developer", icon: Terminal },
  { name: "PhantomJS", role: "Frontend", icon: Code2 },
  { name: "ByteShift", role: "Backend", icon: Cpu },
  { name: "NullPtr", role: "Security", icon: Shield },
  { name: "ShadowOp", role: "QA & Testing", icon: Bug },
  { name: "CipherX", role: "Community", icon: Users },
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

const Credits = () => (
  <PageWrapper>
    <section className="max-w-4xl mx-auto px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
        <h1 className="text-4xl md:text-5xl font-black text-foreground mb-3">Credits</h1>
        <p className="text-muted-foreground max-w-md">The people behind X-NETWORK.</p>
      </motion.div>

      {/* Team - compact list */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.05 } } }}
        className="space-y-2 mb-16"
      >
        {team.map((t) => (
          <motion.div
            key={t.name}
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
            className="glass-card px-5 py-4 flex items-center gap-4 hover-lift group"
          >
            <div className="w-9 h-9 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
              <t.icon className="w-4 h-4 text-primary/70" />
            </div>
            <div className="flex-1">
              <span className="text-sm font-semibold text-foreground">{t.name}</span>
            </div>
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">{t.role}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Tech */}
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
    </section>
    <Footer />
  </PageWrapper>
);

export default Credits;
