import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { StarIcon } from "@/components/icons";

const reviews = [
  { name: "Alex M.", tool: "K-Bot", rating: 5, text: "Been using K-Bot for months. It's completely undetectable and works flawlessly every single time. The auto-answer feature is insanely fast." },
  { name: "Jordan K.", tool: "X-GUI", rating: 5, text: "X-GUI changed the game for me. The overlay is clean, the token gen works perfectly, and I've unlocked every blook available." },
  { name: "Sam T.", tool: "QuizWare", rating: 5, text: "The stealth mode on QuizWare is next level. Accuracy control means I can set it to 85% so it looks natural. Genius." },
  { name: "Riley P.", tool: "IXploit", rating: 4, text: "IXploit handles every subject I've thrown at it. The smart pacing feature makes it look like I'm actually working. Highly recommend." },
  { name: "Casey D.", tool: "X-Bot", rating: 5, text: "X-Bot runs in the background while I do other stuff. Completely hands-free Blooket farming. It's exactly what I needed." },
  { name: "Morgan L.", tool: "K-Bot", rating: 5, text: "Fast, reliable, and the multi-game support is perfect. I can run it across multiple Kahoot sessions simultaneously." },
  { name: "Taylor R.", tool: "QuizWare", rating: 4, text: "Live answers are instant. The stealth features keep everything under the radar. Solid tool overall." },
  { name: "Jamie W.", tool: "X-GUI", rating: 5, text: "The GUI is actually beautiful. Not just functional — it's well designed. Token generation is smooth and fast." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Reviews = () => (
  <PageWrapper>
    <section className="max-w-7xl mx-auto px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-foreground mb-3">Reviews</h1>
        <p className="text-lg text-muted-foreground max-w-xl">What our users are saying about X-NETWORK tools.</p>
      </motion.div>

      {/* Rating overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-6 mb-10 flex items-center gap-6"
      >
        <div className="text-4xl font-black gradient-text">4.9</div>
        <div>
          <div className="flex gap-1 mb-1">
            {[1,2,3,4,5].map((i) => <StarIcon key={i} className="w-4 h-4 text-primary" />)}
          </div>
          <div className="text-sm text-muted-foreground">Based on {reviews.length} reviews</div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        className="grid md:grid-cols-2 gap-4"
      >
        {reviews.map((r, i) => (
          <motion.div key={i} variants={fadeUp} className="glass-card p-6 hover-lift">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-sm font-bold text-primary">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.tool}</div>
                </div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <StarIcon key={j} className="w-3.5 h-3.5 text-primary" />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
    <Footer />
  </PageWrapper>
);

export default Reviews;
