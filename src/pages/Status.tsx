import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { CheckCircleIcon, AlertCircleIcon } from "@/components/icons";

const services = [
  { name: "K-Bot", game: "Kahoot", status: "operational", uptime: "99.9%", latency: "12ms" },
  { name: "X-GUI", game: "Blooket", status: "operational", uptime: "99.8%", latency: "18ms" },
  { name: "X-Bot", game: "Blooket", status: "operational", uptime: "99.7%", latency: "15ms" },
  { name: "QuizWare", game: "Quizizz", status: "operational", uptime: "99.9%", latency: "10ms" },
  { name: "Underground", game: "Wayground", status: "maintenance", uptime: "97.2%", latency: "45ms" },
  { name: "IXploit", game: "IXL", status: "operational", uptime: "99.6%", latency: "22ms" },
];

const operational = services.filter((s) => s.status === "operational").length;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Status = () => (
  <PageWrapper>
    <section className="max-w-4xl mx-auto px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <h1 className="text-4xl md:text-5xl font-black text-foreground mb-3">System Status</h1>
        <p className="text-lg text-muted-foreground">Real-time status of all X-NETWORK services.</p>
      </motion.div>

      {/* Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-6 mb-8 flex items-center gap-4"
      >
        <div className={`w-3 h-3 rounded-full ${operational === services.length ? "bg-success" : "bg-warning"} animate-pulse`} />
        <div>
          <div className="font-semibold text-foreground">
            {operational === services.length ? "All Systems Operational" : `${operational}/${services.length} Systems Operational`}
          </div>
          <div className="text-sm text-muted-foreground">Last checked: just now</div>
        </div>
      </motion.div>

      {/* Services */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.05 } } }}
        className="space-y-3"
      >
        {services.map((s) => (
          <motion.div key={s.name} variants={fadeUp} className="glass-card px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {s.status === "operational" ? (
                <CheckCircleIcon className="w-5 h-5 text-success" />
              ) : (
                <AlertCircleIcon className="w-5 h-5 text-warning" />
              )}
              <div>
                <div className="font-semibold text-foreground text-sm">{s.name}</div>
                <div className="text-xs text-muted-foreground">{s.game}</div>
              </div>
            </div>
            <div className="flex items-center gap-6 text-xs">
              <div className="hidden sm:block">
                <span className="text-muted-foreground">Uptime </span>
                <span className="text-foreground font-medium">{s.uptime}</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-muted-foreground">Latency </span>
                <span className="text-foreground font-medium">{s.latency}</span>
              </div>
              <div className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                s.status === "operational" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
              }`}>
                {s.status}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
    <Footer />
  </PageWrapper>
);

export default Status;
