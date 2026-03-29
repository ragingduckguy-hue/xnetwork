import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { cheats } from "@/data/cheats";
import { Download } from "lucide-react";

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
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/0 group-hover:bg-primary/8 rounded-full blur-3xl transition-all duration-500" />

              <div className="flex-shrink-0 mt-0.5">
                <Logo />
              </div>

              <div className="flex-1 min-w-0 relative z-10">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-[10px] font-mono text-primary/50 uppercase tracking-widest">{c.game}</span>
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    c.status === "operational" ? "bg-success" : "bg-warning"
                  }`} />
                </div>
                <h3 className="text-lg font-bold text-foreground tracking-tight mb-2">{c.tool}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {c.features.map((f) => (
                    <span key={f} className="px-2.5 py-0.5 rounded-md bg-secondary/80 text-[10px] text-secondary-foreground font-medium">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Install button */}
              <div className="flex-shrink-0 flex items-center self-center">
                <Link
                  to={`/cheats/${c.slug}`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                    c.status === "operational"
                      ? "bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:border-primary/30"
                      : "bg-secondary/60 border border-glass-border text-muted-foreground"
                  }`}
                >
                  <Download className="w-3.5 h-3.5" />
                  Install
                </Link>
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
