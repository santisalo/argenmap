export default function TopBar({ titulo }) {
  return (
    <header className="h-full bg-slate-700 flex items-center justify-center">
      <h1 className="text-white text-lg md:text-3xl">{titulo}</h1>
    </header>
  );
}
