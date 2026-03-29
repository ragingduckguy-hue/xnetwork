import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { CheckCircle, AlertTriangle, Clock, Wifi, Server, Activity, ArrowUpRight } from "lucide-react";

const services = [
  { name: "K-Bot", game: "Kahoot", status: "operational", uptime: "99.9%", latency: "12ms", lastIncident: "32 days ago" },
  { name: "X-GUI", game: "Blooket", status: "operational", uptime: "99.8%", latency: "18ms", lastIncident: "14 days ago" },
  { name: "X-Bot", game: "Blooket", status: "operational", uptime: "99.7%", latency: "15ms", lastIncident: "21 days ago" },
  { name: "QuizWare", game: "Quizizz", status: "operational", uptime: "99.9%", latency: "10ms", lastIncident: "45 days ago" },
  { name: "Underground", game: "Wayground", status: "maintenance", uptime: "97.2%", latency: "—", lastIncident: "Active" },
  { name: "IXploit", game: "IXL", status: "operational", uptime: "99.6%", latency: "22ms", lastIncident: "8 days ago" },
];

const operational = services.filter((s) => s.status === "operational").length;

// Generate fake uptime bars (last 30 days)
const generateUptimeBars = (status: string) => {
  return Array.from({ length: 30 }, (_, i) => {
    if (status === "maintenance" && i > 26) return "down";
    return Math.random() > 0.02 ? "up" : "degraded";
  });
};

const Status = () => (
  <PageWrapper>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-primary/4 rounded-full blur-[180px] pointer-events-none" />

    <section className="max-w-4xl mx-auto px-6 py-20 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <h1 className="text-4xl md:text-5xl font-black text-foreground mb-3">System Status</h1>
        <p className="text-muted-foreground">Real-time monitoring of all X-NETWORK services.</p>
      </motion.div>

      {/* Overall status banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className={`glass-card p-5 mb-4 flex items-center justify-between ${
          operational === services.length ? "border-success/20" : "border-warning/20"
        }`}
      >
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            operational === services.length ? "bg-success/10" : "bg-warning/10"
          }`}>
            {operational === services.length 
              ? <CheckCircle className="w-5 h-5 text-success" />
              : <AlertTriangle className="w-5 h-5 text-warning" />
            }
          </div>
          <div>
            <div className="text-sm font-bold text-foreground">
              {operational === services.length ? "All Systems Operational" : `${operational}/${services.length} Operational`}
            </div>
            <div className="text-[10px] text-muted-foreground mt-0.5">Updated just now</div>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[10px] text-muted-foreground">
          <div className="hidden sm:flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-sm bg-success/60" /> Operational
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-sm bg-warning/60" /> Degraded
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-sm bg-destructive/60" /> Down
          </div>
        </div>
      </motion.div>

      {/* Quick stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        className="grid grid-cols-3 gap-3 mb-8"
      >
        {[
          { label: "Avg Uptime", value: "99.5%", icon: Server },
          { label: "Avg Latency", value: "17ms", icon: Wifi },
          { label: "Active Tools", value: `${operational}/${services.length}`, icon: Activity },
        ].map((s) => (
          <div key={s.label} className="glass-card px-4 py-3.5 text-center">
            <s.icon className="w-4 h-4 text-primary/50 mx-auto mb-2" />
            <div className="text-lg font-black text-foreground">{s.value}</div>
            <div className="text-[9px] text-muted-foreground uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Service list */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.04 } } }}
        className="space-y-2"
      >
        {services.map((s) => {
          const bars = generateUptimeBars(s.status);
          return (
            <motion.div
              key={s.name}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
              className="glass-card px-5 py-4 hover-lift group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    s.status === "operational" ? "bg-success" : "bg-warning animate-pulse"
                  }`} />
                  <div>
                    <span className="text-sm font-bold text-foreground">{s.name}</span>
                    <span className="text-[10px] text-muted-foreground ml-2">{s.game}</span>
                  </div>
                </div>
                <div className="flex items-center gap-5 text-[11px]">
                  <div className="hidden sm:block">
                    <span className="text-muted-foreground">Uptime </span>
                    <span className="text-foreground font-semibold">{s.uptime}</span>
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-muted-foreground">Latency </span>
                    <span className="text-foreground font-semibold">{s.latency}</span>
                  </div>
                  <div className={`px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider ${
                    s.status === "operational" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                  }`}>
                    {s.status}
                  </div>
                </div>
              </div>
              {/* 30-day uptime bars */}
              <div className="flex gap-[2px]">
                {bars.map((bar, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-1.5 rounded-sm ${
                      bar === "up" ? "bg-success/30 group-hover:bg-success/50" :
                      bar === "degraded" ? "bg-warning/40" : "bg-destructive/40"
                    } transition-colors duration-300`}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[9px] text-muted-foreground">30 days ago</span>
                <span className="text-[9px] text-muted-foreground">Today</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Incident log */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <h2 className="text-lg font-bold text-foreground mb-4">Recent Incidents</h2>
        <div className="space-y-2">
          {[
            { date: "Mar 15", title: "Underground — Scheduled maintenance", severity: "warning" },
            { date: "Mar 8", title: "IXploit — Brief API latency spike", severity: "minor" },
            { date: "Feb 28", title: "X-GUI — Hotfix deployed for token gen", severity: "minor" },
          ].map((inc, i) => (
            <div key={i} className="glass-card px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{inc.date}</span>
                <span className="text-xs text-foreground font-medium">{inc.title}</span>
              </div>
              <span className={`text-[9px] font-semibold uppercase tracking-wider ${
                inc.severity === "warning" ? "text-warning" : "text-muted-foreground"
              }`}>
                {inc.severity === "warning" ? "Active" : "Resolved"}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
    <Footer />
  </PageWrapper>
);

export default Status;
