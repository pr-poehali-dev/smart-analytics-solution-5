import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ backgroundColor: "var(--wedding-black)" }}
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <div className="w-full h-full" style={{ background: "linear-gradient(135deg, #1a0a10 0%, #2d1020 40%, #1a1a1a 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(123,30,60,0.15) 0%, transparent 70%)" }} />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a96e' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center px-6">
        <p className="text-xs tracking-[0.4em] uppercase mb-8 opacity-60" style={{ color: "var(--wedding-gold)", fontFamily: "Montserrat, sans-serif" }}>
          вы приглашены
        </p>
        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-light italic mb-6 leading-none"
          style={{ color: "var(--wedding-beige)" }}
        >
          Анна
          <span className="block font-thin not-italic text-4xl md:text-5xl my-3 opacity-50" style={{ color: "var(--wedding-gold)" }}>
            &
          </span>
          Михаил
        </h1>
        <div className="w-24 h-px mx-auto mb-6" style={{ backgroundColor: "var(--wedding-gold)", opacity: 0.5 }} />
        <p className="text-lg md:text-xl font-light tracking-widest" style={{ color: "var(--wedding-beige)", fontFamily: "Montserrat, sans-serif", opacity: 0.8 }}>
          14 · 06 · 2025
        </p>
        <p className="text-sm mt-3 tracking-wide opacity-50" style={{ color: "var(--wedding-beige)", fontFamily: "Montserrat, sans-serif" }}>
          листайте вниз
        </p>
      </motion.div>
    </div>
  );
}
