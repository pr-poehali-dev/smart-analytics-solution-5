export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 p-6">
      <div className="flex justify-center items-center">
        <nav className="flex gap-8">
          <a href="#details" className="text-white hover:opacity-70 transition-opacity uppercase text-xs tracking-widest font-light" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Детали
          </a>
          <a href="#timing" className="text-white hover:opacity-70 transition-opacity uppercase text-xs tracking-widest font-light" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Тайминг
          </a>
          <a href="#rsvp" className="text-white hover:opacity-70 transition-opacity uppercase text-xs tracking-widest font-light" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Подтвердить
          </a>
        </nav>
      </div>
    </header>
  );
}
