import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";

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

// Duplicate for seamless loop
const marqueeReviewsTop = [...reviews.slice(0, 4), ...reviews.slice(0, 4)];
const marqueeReviewsBottom = [...reviews.slice(4), ...reviews.slice(4)];

const ReviewCard = ({ r }: { r: typeof reviews[0] }) => (
  <div className="glass-card p-5 min-w-[320px] max-w-[360px] flex-shrink-0">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary">
          {r.name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">{r.name}</div>
          <div className="text-[10px] text-muted-foreground font-medium">{r.tool}</div>
        </div>
      </div>
      <div className="flex gap-0.5">
        {Array.from({ length: r.rating }).map((_, j) => (
          <Star key={j} className="w-3 h-3 text-primary fill-primary" />
        ))}
      </div>
    </div>
    <p className="text-xs text-muted-foreground leading-relaxed">{r.text}</p>
  </div>
);

const Reviews = () => (
  <PageWrapper>
    <section className="max-w-7xl mx-auto px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-black text-foreground mb-3">Reviews</h1>
        <p className="text-muted-foreground max-w-md mx-auto">What our users are saying about X-NETWORK tools.</p>
      </motion.div>

      {/* Rating summary */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="flex justify-center mb-12"
      >
        <div className="glass-card px-8 py-4 flex items-center gap-5">
          <span className="text-4xl font-black gradient-text">4.9</span>
          <div>
            <div className="flex gap-0.5 mb-1">
              {[1,2,3,4,5].map((i) => <Star key={i} className="w-4 h-4 text-primary fill-primary" />)}
            </div>
            <span className="text-xs text-muted-foreground">{reviews.length} verified reviews</span>
          </div>
        </div>
      </motion.div>

      {/* Marquee rows */}
      <div className="space-y-4 overflow-hidden">
        {/* Row 1 - scroll left */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {marqueeReviewsTop.map((r, i) => (
              <ReviewCard key={i} r={r} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - scroll right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          <motion.div
            className="flex gap-4"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            {marqueeReviewsBottom.map((r, i) => (
              <ReviewCard key={i} r={r} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
    <Footer />
  </PageWrapper>
);

export default Reviews;
