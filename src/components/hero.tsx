import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeartPulse, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { HERO_BACKGROUNDS } from "@/lib/constants";

const Hero = () => {
  const [heroBackgroundIndex, setHeroBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroBackgroundIndex(
        (currentIndex) => (currentIndex + 1) % HERO_BACKGROUNDS.length,
      );
    }, 7000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 md:pt-32 lg:pt-36 overflow-hidden pb-24 lg:pb-40"
    >
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={HERO_BACKGROUNDS[heroBackgroundIndex]}
            src={HERO_BACKGROUNDS[heroBackgroundIndex]}
            alt="Hero background illustration"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="w-full h-full object-cover filter blur-sm"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-900/55 to-blue-950/50" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-blue-600/20 text-blue-200 border-blue-600/30 backdrop-blur-md px-4 py-1.5 text-sm">
              Standard of Excellence in Medicated Sweets
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Sweetening the Path to{" "}
              <span className="text-blue-600">Better Health</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
              Mel Medicated Confectionery PLC blends the science of wellness
              with the art of confectionery. We create delicious, effective
              medicated treats that support your daily health journey.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats/Features bar */}
      <div className="absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-xl border-t border-white/10 py-8 hidden lg:block">
        <div className="container mx-auto px-6 flex justify-between items-center text-white">
          {[
            {
              icon: HeartPulse,
              label: "Health-Focused",
              sub: "Science-backed formulas",
            },
            {
              icon: ShieldCheck,
              label: "Certified Quality",
              sub: "ISO & GMP Compliant",
            },
            {
              icon: CheckCircle2,
              label: "Natural Ingredients",
              sub: "Premium herbal extracts",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="bg-blue-700/20 p-3 rounded-full border border-blue-600/30">
                <item.icon className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">{item.label}</p>
                <p className="text-slate-400 text-sm">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
