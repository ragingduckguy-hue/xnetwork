import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { CodeIcon } from "@/components/icons";

const team = [
  { name: "xDev", role: "Lead Developer", desc: "Core architecture and exploit engine development." },
  { name: "PhantomJS", role: "Frontend Engineer", desc: "UI/UX design and GUI overlay systems." },
  { name: "ByteShift", role: "Backend Engineer", desc: "Server infrastructure and bot framework." },
  { name: "NullPtr", role: "Security Researcher", desc: "Vulnerability research and evasion techniques." },
  { name: "ShadowOp", role: "QA & Testing", desc: "Quality assurance and detection testing." },
  { name: "CipherX", role: "Community Manager", desc: "Community management and user support." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Credits = () => (
  <PageWrapper>
    <section className="max-w-5xl mx-auto px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-foreground mb-3">Credits</h1>
        <p className="text-lg text-muted-foreground max-w-xl">The team behind X-NETWORK.</p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {team.map((t) => (
          <motion.div key={t.name} variants={fadeUp} className="glass-card p-6 hover-lift group">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <span className="text-lg font-bold text-primary">{t.name.charAt(0)}</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-0.5">{t.name}</h3>
            <div className="text-xs font-medium text-primary mb-3">{t.role}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Tech stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <CodeIcon className="w-5 h-5 text-primary" />
          Built With
        </h2>
        <div className="flex flex-wrap gap-3">
          {["TypeScript", "React", "Node.js", "Python", "WebSocket", "Chrome Extensions", "Tampermonkey"].map((tech) => (
            <span key={tech} className="px-4 py-2 glass-card text-sm font-medium text-secondary-foreground">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
    <Footer />
  </PageWrapper>
);

export default Credits;
