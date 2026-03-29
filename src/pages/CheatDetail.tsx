import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { getCheatBySlug } from "@/data/cheats";
import { ArrowLeft, Download, CheckCircle, AlertTriangle, Monitor, Tag, List, Cpu } from "lucide-react";

const CheatDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const cheat = slug ? getCheatBySlug(slug) : undefined;

  if (!cheat) return <Navigate to="/cheats" replace />;

  const Logo = cheat.logo;
  const Icon = cheat.icon;
  const isOperational = cheat.status === "operational";

  return (
    <PageWrapper>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />

      <section className="max-w-3xl mx-auto px-6 py-20 relative z-10">
        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="/cheats" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Arsenal
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-8 mb-6 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          <div className="relative z-10 flex items-start gap-6">
            <Logo className="w-16 h-16 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-mono text-primary/50 uppercase tracking-widest">{cheat.game}</span>
                <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                  isOperational ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                }`}>
                  {isOperational ? <CheckCircle className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                  {cheat.status}
                </div>
              </div>
              <h1 className="text-3xl font-black text-foreground mb-2">{cheat.tool}</h1>
              <p className="text-sm text-muted-foreground leading-relaxed">{cheat.longDesc}</p>
            </div>
          </div>
        </motion.div>

        {/* Info grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-3 mb-6"
        >
          {[
            { label: "Version", value: cheat.version, icon: Tag },
            { label: "Platform", value: cheat.platform, icon: Monitor },
            { label: "Features", value: `${cheat.features.length} included`, icon: Cpu },
          ].map((item) => (
            <div key={item.label} className="glass-card px-5 py-4">
              <div className="flex items-center gap-2 mb-1.5">
                <item.icon className="w-3.5 h-3.5 text-primary/60" />
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">{item.label}</span>
              </div>
              <span className="text-sm font-semibold text-foreground">{item.value}</span>
            </div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass-card p-6 mb-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <List className="w-4 h-4 text-primary/60" />
            <h2 className="text-sm font-bold text-foreground">Features</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {cheat.features.map((f) => (
              <span key={f} className="px-3 py-1.5 rounded-lg bg-primary/8 border border-primary/15 text-xs font-medium text-primary">
                {f}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 mb-6"
        >
          <h2 className="text-sm font-bold text-foreground mb-4">Requirements</h2>
          <div className="space-y-2">
            {cheat.requirements.map((r, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-primary/40" />
                <span className="text-xs text-muted-foreground">{r}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Installation steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-sm font-bold text-foreground mb-5">Installation</h2>
          <div className="space-y-4">
            {cheat.instructions.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                  {i + 1}
                </div>
                <span className="text-sm text-muted-foreground leading-relaxed pt-0.5">{step}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <button
            disabled={!isOperational}
            className={`inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
              isOperational
                ? "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(265_85%_60%/0.3)] hover:-translate-y-0.5"
                : "bg-secondary text-muted-foreground cursor-not-allowed"
            }`}
          >
            <Download className="w-4 h-4" />
            {isOperational ? `Download ${cheat.tool}` : "Under Maintenance"}
          </button>
          {isOperational && (
            <p className="text-[10px] text-muted-foreground mt-3">v{cheat.version} • Free to use</p>
          )}
        </motion.div>
      </section>
      <Footer />
    </PageWrapper>
  );
};

export default CheatDetail;
