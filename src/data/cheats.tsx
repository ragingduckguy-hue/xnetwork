import { type LucideIcon } from "lucide-react";
import { Zap, Shield, Bot, Brain, Gamepad2, Globe } from "lucide-react";

// X-branded logo for X-GUI and X-Bot
const XBrandLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center`}>
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M6 6L18 18M18 6L6 18" stroke="hsl(265, 85%, 70%)" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  </div>
);

const KahootLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center`}>
    <span className="text-sm font-black text-primary">K!</span>
  </div>
);

const QuizizzLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center`}>
    <span className="text-base font-black text-primary">Q</span>
  </div>
);

const IXLLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center`}>
    <span className="text-[10px] font-black text-primary tracking-tight">IXL</span>
  </div>
);

const WaygroundLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center`}>
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M4 16L8 8L12 13L16 5L20 16" stroke="hsl(265, 85%, 70%)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export interface CheatData {
  slug: string;
  game: string;
  tool: string;
  desc: string;
  longDesc: string;
  features: string[];
  status: "operational" | "maintenance";
  icon: LucideIcon;
  logo: React.FC<{ className?: string }>;
  version: string;
  platform: string;
  requirements: string[];
  instructions: string[];
}

export const cheats: CheatData[] = [
  {
    slug: "k-bot",
    game: "Kahoot",
    tool: "K-Bot",
    desc: "Fully automated answer bot — joins games, reads questions, and selects correct answers instantly.",
    longDesc: "K-Bot is our flagship Kahoot exploit. It intercepts WebSocket communications to pull correct answers before they're displayed, achieving near-instant response times. Supports classic mode, team mode, and challenge mode with full score manipulation capabilities.",
    features: ["Auto-answer", "Score manipulation", "Multi-game"],
    status: "operational",
    icon: Bot,
    logo: KahootLogo,
    version: "3.2.1",
    platform: "Browser Extension / Tampermonkey",
    requirements: ["Chrome / Firefox / Edge", "Tampermonkey or Violentmonkey", "Active Kahoot session"],
    instructions: ["Install the browser extension or userscript", "Navigate to a Kahoot game", "Click the K-Bot overlay to activate", "Select your mode and let it run"],
  },
  {
    slug: "x-gui",
    game: "Blooket",
    tool: "X-GUI",
    desc: "Complete graphical overlay for Blooket. Unlock all blooks, manipulate tokens, dominate any mode.",
    longDesc: "X-GUI provides a full graphical interface that overlays on top of Blooket. It hooks into the game's API to manipulate token counts, unlock every blook in the collection, and exploit every game mode. The sleek UI makes it easy to use even for beginners.",
    features: ["Token gen", "Blook unlocker", "Mode exploits"],
    status: "operational",
    icon: Gamepad2,
    logo: XBrandLogo,
    version: "2.8.0",
    platform: "Browser Console / Bookmarklet",
    requirements: ["Any modern browser", "Access to browser console (F12)", "Active Blooket session"],
    instructions: ["Open the browser console on Blooket", "Paste the X-GUI loader script", "The overlay will appear in the corner", "Select your exploit from the menu"],
  },
  {
    slug: "x-bot",
    game: "Blooket",
    tool: "X-Bot",
    desc: "Lightweight bot that runs silently in the background. Perfect for hands-free grinding.",
    longDesc: "X-Bot is a headless automation tool designed for long-running Blooket sessions. It operates silently in the background, automatically playing games and farming tokens without any user interaction. Perfect for overnight grinding.",
    features: ["Auto-play", "Silent mode", "Background exec"],
    status: "operational",
    icon: Zap,
    logo: XBrandLogo,
    version: "1.5.3",
    platform: "Node.js Script",
    requirements: ["Node.js 18+", "npm or yarn", "Blooket account credentials"],
    instructions: ["Clone the X-Bot repository", "Run npm install to set up dependencies", "Configure your credentials in config.json", "Run the bot with npm start"],
  },
  {
    slug: "quizware",
    game: "Quizizz",
    tool: "QuizWare",
    desc: "Intelligent answer engine with built-in stealth. Configurable accuracy to avoid suspicion.",
    longDesc: "QuizWare uses advanced pattern matching to find correct answers on Quizizz. Its standout feature is configurable accuracy — set it to 85% to avoid looking suspicious. Built-in stealth mode randomizes answer timing to mimic human behavior.",
    features: ["Stealth mode", "Accuracy ctrl", "Live answers"],
    status: "operational",
    icon: Brain,
    logo: QuizizzLogo,
    version: "2.1.0",
    platform: "Browser Extension",
    requirements: ["Chrome or Firefox", "QuizWare extension installed", "Active Quizizz session"],
    instructions: ["Install the QuizWare extension", "Join a Quizizz game", "Click the QuizWare icon to configure accuracy", "Activate and let it handle the rest"],
  },
  {
    slug: "underground",
    game: "Wayground",
    tool: "Underground",
    desc: "Deep integration exploit suite. Access hidden features, bypass restrictions, unlock premium.",
    longDesc: "Underground is our most advanced exploit suite, targeting the Wayground platform. It provides deep integration with the platform's internals, bypassing content restrictions and unlocking premium features that are normally paywalled.",
    features: ["Deep integration", "Bypass engine", "Unlocker"],
    status: "maintenance",
    icon: Globe,
    logo: WaygroundLogo,
    version: "0.9.2-beta",
    platform: "Tampermonkey Script",
    requirements: ["Chrome / Firefox / Edge", "Tampermonkey", "Wayground account"],
    instructions: ["Install the Tampermonkey userscript", "Navigate to Wayground", "The exploit menu appears automatically", "Currently in maintenance — limited functionality"],
  },
  {
    slug: "ixploit",
    game: "IXL",
    tool: "IXploit",
    desc: "Automated problem solver for all IXL subjects and grade levels with smart pacing.",
    longDesc: "IXploit automatically solves IXL problems across all subjects and grade levels. Its smart pacing feature spaces out answers to look natural, and it supports configurable accuracy to match your target score. Works silently in the background.",
    features: ["Auto-solver", "All subjects", "Smart pacing"],
    status: "operational",
    icon: Shield,
    logo: IXLLogo,
    version: "1.8.7",
    platform: "Browser Extension / Console",
    requirements: ["Any modern browser", "IXL account with active subscription", "Browser extension or console access"],
    instructions: ["Install the IXploit extension or paste console script", "Navigate to any IXL skill", "Configure your target accuracy", "Activate and watch it solve"],
  },
];

export const getCheatBySlug = (slug: string) => cheats.find((c) => c.slug === slug);
