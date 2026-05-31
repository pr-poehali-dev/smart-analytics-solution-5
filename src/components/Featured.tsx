import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Featured() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);

  return (
    <div
      id="details"
      className="min-h-screen px-6 py-20 lg:py-0 flex flex-col lg:flex-row items-center"
      style={{ backgroundColor: "var(--wedding-beige-light)" }}
    >
      <div className="flex-1 flex justify-center items-center lg:h-screen lg:order-2 mb-12 lg:mb-0">
        <motion.div style={{ y }} className="w-72 h-96 md:w-80 md:h-[480px] overflow-hidden shadow-2xl">
          <img
            src="/images/exterior.png"
            alt="Фото пары"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="flex-1 lg:order-1 flex flex-col justify-center lg:pr-16">
        <p className="uppercase text-xs tracking-[0.3em] mb-6" style={{ color: "var(--wedding-burgundy)", fontFamily: "Montserrat, sans-serif" }}>
          место проведения
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light italic mb-6 leading-tight" style={{ color: "var(--wedding-black)" }}>
          Ресторан «Белый зал»
        </h2>
        <div className="w-16 h-px mb-6" style={{ backgroundColor: "var(--wedding-burgundy)", opacity: 0.4 }} />
        <p className="text-lg font-light mb-4 leading-relaxed" style={{ color: "#5a4a42", fontFamily: "Montserrat, sans-serif" }}>
          ул. Садовая, 12, Москва
        </p>
        <p className="text-base font-light leading-relaxed mb-8" style={{ color: "#5a4a42", fontFamily: "Montserrat, sans-serif" }}>
          Торжество состоится в тёплой, романтической атмосфере с видом на реку. Мы с нетерпением ждём вас в этот особенный день.
        </p>

        <div className="mb-10">
          <h3 className="text-xl font-light mb-4 italic" style={{ color: "var(--wedding-burgundy)" }}>Дресс-код</h3>
          <div className="flex gap-4 flex-wrap">
            <div className="flex items-center gap-3 px-4 py-3 border" style={{ borderColor: "var(--wedding-burgundy)", borderOpacity: 0.3 }}>
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#f5ede0", border: "1px solid #c9a96e" }} />
              <span className="text-sm tracking-wide" style={{ color: "var(--wedding-black)", fontFamily: "Montserrat, sans-serif" }}>Бежевый</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 border" style={{ borderColor: "var(--wedding-burgundy)", borderOpacity: 0.3 }}>
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#7b1e3c" }} />
              <span className="text-sm tracking-wide" style={{ color: "var(--wedding-black)", fontFamily: "Montserrat, sans-serif" }}>Бордовый</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 border" style={{ borderColor: "var(--wedding-burgundy)", borderOpacity: 0.3 }}>
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#1a1a1a" }} />
              <span className="text-sm tracking-wide" style={{ color: "var(--wedding-black)", fontFamily: "Montserrat, sans-serif" }}>Чёрный</span>
            </div>
          </div>
          <p className="text-sm mt-3 font-light italic" style={{ color: "#8a7a72", fontFamily: "Montserrat, sans-serif" }}>
            Пожалуйста, избегайте белого цвета в нарядах
          </p>
        </div>
      </div>
    </div>
  );
}
