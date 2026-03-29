import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { Code2, Cpu, Shield, Eye, Bug, Users, Terminal, Globe, Zap, Blocks, Chrome, FileCode2 } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  desc: string;
  icon: LucideIcon;
}

const team: TeamMember[] = [
  { name: "xDev", role: "Lead Developer", desc: "Core architecture and exploit engine development.", icon: Terminal },
  { name: "PhantomJS", role: "Frontend Engineer", desc: "UI/UX design and GUI overlay systems.", icon: Code2 },
  { name: "ByteShift", role: "Backend Engineer", desc: "Server infrastructure and bot framework.", icon: Cpu },
  { name: "NullPtr", role: "Security Researcher", desc: "Vulnerability research and evasion techniques.", icon: Shield },
  { name: "ShadowOp", role: "QA & Testing", desc: "Quality assurance and detection testing.", icon: Bug },
  { name: "CipherX", role: "Community Manager", desc: "Community management and user support.", icon: Users },
];

const techStack = [
  { name: "TypeScript", icon: FileCode2 },
  { name: "React", icon: Blocks },
  { name: "Node.js", icon: Globe },
  { name: "Python", icon: Terminal },
  { name: "WebSocket", icon: Zap },
  { name: "Chrome Extensions", icon: Chrome },
  { name: "Tampermonkey", icon: Code2 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Credits = () => (
  <PageWrapper>
    {/* Background accent */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

    <section className="max-w-5xl mx-auto px-6 py-20 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-5">
          <Users className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-medium text-primary">The Team</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-foreground mb-3">Credits</h1>
        <p className="text-lg text-muted-foreground max-w-xl">The people who make X-NETWORK possible.</p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.07 } } }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {team.map((t) => (
          <motion.div key={t.name} variants={fadeUp} className="glass-card p-7 hover-lift gradient-border group relative overflow-hidden">
            {/* Subtle corner glow on hover */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/0 group-hover:bg-primary/10 rounded-full blur-2xl transition-all duration-500" />
            
            <div className="relative z-10">
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                <t.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-0.5 tracking-tight">{t.name}</h3>
              <div className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-3">{t.role}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Tech stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Cpu className="w-4 h-4 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Built With</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {techStack.map((tech) => (
            <div key={tech.name} className="glass-card px-5 py-4 flex items-center gap-3 hover-lift group">
              <tech.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium text-secondary-foreground">{tech.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
    <Footer />
  </PageWrapper>
);

export default Credits;
