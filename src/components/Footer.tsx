export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[500px] lg:h-[600px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+500px)] lg:h-[calc(100vh+600px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[500px] lg:h-[600px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-500px)] lg:top-[calc(100vh-600px)]">
          <div className="py-8 px-6 h-full w-full flex flex-col justify-between" style={{ backgroundColor: "var(--wedding-burgundy)" }}>
            <div className="flex justify-center gap-12 sm:gap-20">
              <div className="flex flex-col gap-2 text-center">
                <h3 className="mb-2 uppercase text-xs tracking-widest opacity-60" style={{ color: "var(--wedding-beige)", fontFamily: "Montserrat, sans-serif" }}>
                  Дата
                </h3>
                <span className="text-base font-light italic" style={{ color: "var(--wedding-beige)" }}>14 июня 2025</span>
              </div>
              <div className="flex flex-col gap-2 text-center">
                <h3 className="mb-2 uppercase text-xs tracking-widest opacity-60" style={{ color: "var(--wedding-beige)", fontFamily: "Montserrat, sans-serif" }}>
                  Место
                </h3>
                <span className="text-base font-light italic" style={{ color: "var(--wedding-beige)" }}>Ресторан «Белый зал»</span>
              </div>
              <div className="flex flex-col gap-2 text-center">
                <h3 className="mb-2 uppercase text-xs tracking-widest opacity-60" style={{ color: "var(--wedding-beige)", fontFamily: "Montserrat, sans-serif" }}>
                  Начало
                </h3>
                <span className="text-base font-light italic" style={{ color: "var(--wedding-beige)" }}>14:00</span>
              </div>
            </div>

            <div className="text-center">
              <div className="w-px h-12 mx-auto mb-6 opacity-30" style={{ backgroundColor: "var(--wedding-beige)" }} />
              <h1
                className="text-[18vw] sm:text-[16vw] lg:text-[13vw] leading-none font-light italic"
                style={{ color: "var(--wedding-beige)", opacity: 0.15 }}
              >
                А & М
              </h1>
              <p className="text-sm opacity-50 -mt-4" style={{ color: "var(--wedding-beige)", fontFamily: "Montserrat, sans-serif" }}>
                С любовью ждём вас · 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
