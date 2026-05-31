import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const timeline = [
  { time: "14:00", label: "Сбор гостей", desc: "Встреча и приветственные напитки" },
  { time: "15:00", label: "Церемония", desc: "Торжественная регистрация брака" },
  { time: "16:00", label: "Фотосессия", desc: "Совместные фото с молодожёнами" },
  { time: "17:00", label: "Банкет", desc: "Праздничный ужин, тосты, танцы" },
  { time: "23:00", label: "Завершение", desc: "Финальный вальс и прощание" },
];

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <>
      <div
        id="timing"
        className="relative flex items-center justify-center overflow-hidden py-32"
        ref={container}
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)", backgroundColor: "var(--wedding-black)" }}
      >
        <div className="fixed top-0 left-0 h-full w-full pointer-events-none" style={{ zIndex: 0 }}>
          <motion.div style={{ y }} className="relative w-full h-full opacity-10">
            <img
              src="/images/spiral-circles.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="relative z-10 w-full max-w-2xl mx-auto px-8">
          <p className="text-xs tracking-[0.4em] uppercase mb-4 text-center" style={{ color: "var(--wedding-gold)", fontFamily: "Montserrat, sans-serif" }}>
            программа вечера
          </p>
          <h2 className="text-4xl md:text-5xl font-light italic text-center mb-16" style={{ color: "var(--wedding-beige)" }}>
            Тайминг
          </h2>

          <div className="relative">
            <div className="absolute left-[90px] top-0 bottom-0 w-px" style={{ backgroundColor: "var(--wedding-gold)", opacity: 0.2 }} />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-8 mb-10"
              >
                <div className="w-[90px] shrink-0 text-right">
                  <span className="text-lg font-light" style={{ color: "var(--wedding-gold)", fontFamily: "Montserrat, sans-serif" }}>
                    {item.time}
                  </span>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] top-2 w-2 h-2 rounded-full" style={{ backgroundColor: "var(--wedding-burgundy)" }} />
                  <h3 className="text-xl font-light italic mb-1" style={{ color: "var(--wedding-beige)" }}>{item.label}</h3>
                  <p className="text-sm font-light opacity-60" style={{ color: "var(--wedding-beige)", fontFamily: "Montserrat, sans-serif" }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 px-6" style={{ backgroundColor: "var(--wedding-beige-light)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--wedding-burgundy)", fontFamily: "Montserrat, sans-serif" }}>
            памятка
          </p>
          <h2 className="text-4xl md:text-5xl font-light italic mb-8" style={{ color: "var(--wedding-black)" }}>
            О подарках
          </h2>
          <div className="w-16 h-px mx-auto mb-10" style={{ backgroundColor: "var(--wedding-burgundy)", opacity: 0.3 }} />
          <p className="text-lg font-light leading-relaxed mb-6" style={{ color: "#5a4a42", fontFamily: "Montserrat, sans-serif" }}>
            Лучший подарок для нас — ваше присутствие и хорошее настроение.
          </p>
          <p className="text-base font-light leading-relaxed" style={{ color: "#8a7a72", fontFamily: "Montserrat, sans-serif" }}>
            Если вы хотите сделать подарок — мы будем рады денежному конверту или сертификату. Наша мечта — медовый месяц на Балийских островах ✈️
          </p>
          <div className="mt-10 p-6 border" style={{ borderColor: "rgba(123,30,60,0.2)", backgroundColor: "rgba(123,30,60,0.04)" }}>
            <p className="text-sm italic font-light" style={{ color: "var(--wedding-burgundy)", fontFamily: "Cormorant Garamond, serif" }}>
              «Цветы прекрасны, но они вянут. Ваши улыбки останутся с нами навсегда.»
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
