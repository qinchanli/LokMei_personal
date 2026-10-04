export default function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-stone-800 px-6 lg:px-10 py-10">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-serif text-white text-lg">LokMei</p>
        <p className="text-stone-500 text-xs font-medium uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} — LokMei
        </p>
      </div>
    </footer>
  );
}
