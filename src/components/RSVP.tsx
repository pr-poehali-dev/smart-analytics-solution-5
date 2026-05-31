import { useState } from "react";
import { motion } from "framer-motion";

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    attending: "",
    guests: "1",
    dietary: "",
    song: "",
    wishes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div id="rsvp" className="py-32 px-6 flex items-center justify-center min-h-[60vh]" style={{ backgroundColor: "var(--wedding-beige-light)" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="text-5xl mb-6">🤍</div>
          <h3 className="text-3xl font-light italic mb-4" style={{ color: "var(--wedding-burgundy)" }}>Спасибо!</h3>
          <p className="text-lg font-light" style={{ color: "#5a4a42", fontFamily: "Montserrat, sans-serif" }}>
            Мы получили ваш ответ и очень ждём вас!
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div id="rsvp" className="py-24 px-6" style={{ backgroundColor: "var(--wedding-beige-light)" }}>
      <div className="max-w-xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase mb-4 text-center" style={{ color: "var(--wedding-burgundy)", fontFamily: "Montserrat, sans-serif" }}>
          подтверждение
        </p>
        <h2 className="text-4xl md:text-5xl font-light italic text-center mb-4" style={{ color: "var(--wedding-black)" }}>
          Будете с нами?
        </h2>
        <div className="w-16 h-px mx-auto mb-12" style={{ backgroundColor: "var(--wedding-burgundy)", opacity: 0.3 }} />

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--wedding-burgundy)", fontFamily: "Montserrat, sans-serif" }}>
              Ваше имя *
            </label>
            <input
              required
              type="text"
              placeholder="Как вас зовут?"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full border-b bg-transparent outline-none py-2 text-lg font-light placeholder-opacity-40 focus:border-b-2 transition-all"
              style={{ borderColor: "rgba(123,30,60,0.3)", color: "var(--wedding-black)", fontFamily: "Cormorant Garamond, serif" }}
            />
          </div>

          <div>
            <label className="block text-xs tracking-widest uppercase mb-3" style={{ color: "var(--wedding-burgundy)", fontFamily: "Montserrat, sans-serif" }}>
              Смогу прийти? *
            </label>
            <div className="flex gap-4">
              {[["yes", "Да, приду! 🥂"], ["no", "К сожалению, нет"]].map(([val, label]) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setForm({ ...form, attending: val })}
                  className="flex-1 py-3 text-sm font-light tracking-wide transition-all"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    backgroundColor: form.attending === val ? "var(--wedding-burgundy)" : "transparent",
                    color: form.attending === val ? "var(--wedding-beige)" : "var(--wedding-black)",
                    border: `1px solid ${form.attending === val ? "var(--wedding-burgundy)" : "rgba(123,30,60,0.3)"}`,
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {form.attending === "yes" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-6"
            >
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--wedding-burgundy)", fontFamily: "Montserrat, sans-serif" }}>
                  Количество гостей
                </label>
                <select
                  value={form.guests}
                  onChange={e => setForm({ ...form, guests: e.target.value })}
                  className="w-full border-b bg-transparent outline-none py-2 text-lg font-light"
                  style={{ borderColor: "rgba(123,30,60,0.3)", color: "var(--wedding-black)", fontFamily: "Cormorant Garamond, serif" }}
                >
                  <option value="1">Только я</option>
                  <option value="2">Я + партнёр</option>
                  <option value="3">3 человека</option>
                </select>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--wedding-burgundy)", fontFamily: "Montserrat, sans-serif" }}>
                  Пожелания к меню
                </label>
                <input
                  type="text"
                  placeholder="Аллергии, вегетарианское..."
                  value={form.dietary}
                  onChange={e => setForm({ ...form, dietary: e.target.value })}
                  className="w-full border-b bg-transparent outline-none py-2 text-lg font-light"
                  style={{ borderColor: "rgba(123,30,60,0.3)", color: "var(--wedding-black)", fontFamily: "Cormorant Garamond, serif" }}
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--wedding-burgundy)", fontFamily: "Montserrat, sans-serif" }}>
                  Заказать песню 🎶
                </label>
                <input
                  type="text"
                  placeholder="Ваша любимая для танцпола"
                  value={form.song}
                  onChange={e => setForm({ ...form, song: e.target.value })}
                  className="w-full border-b bg-transparent outline-none py-2 text-lg font-light"
                  style={{ borderColor: "rgba(123,30,60,0.3)", color: "var(--wedding-black)", fontFamily: "Cormorant Garamond, serif" }}
                />
              </div>
            </motion.div>
          )}

          <div>
            <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--wedding-burgundy)", fontFamily: "Montserrat, sans-serif" }}>
              Пожелания молодожёнам
            </label>
            <textarea
              rows={3}
              placeholder="Ваши тёплые слова..."
              value={form.wishes}
              onChange={e => setForm({ ...form, wishes: e.target.value })}
              className="w-full border-b bg-transparent outline-none py-2 text-lg font-light resize-none"
              style={{ borderColor: "rgba(123,30,60,0.3)", color: "var(--wedding-black)", fontFamily: "Cormorant Garamond, serif" }}
            />
          </div>

          <button
            type="submit"
            disabled={!form.name || !form.attending}
            className="mt-4 py-4 text-sm uppercase tracking-widest font-light transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              fontFamily: "Montserrat, sans-serif",
              backgroundColor: "var(--wedding-burgundy)",
              color: "var(--wedding-beige)",
            }}
          >
            Отправить ответ
          </button>
        </form>
      </div>
    </div>
  );
}
