export default function Tagline({ children }: { children?: React.ReactNode }) {
  return (
    <span className="inline-block bg-gold text-gold-foreground px-6 py-2 rounded-full font-black text-xl shadow-[4px_4px_0px_rgba(28,44,91,0.2)] -rotate-2 transition-all duration-300 hover:scale-110 hover:rotate-2 hover:shadow-[8px_8px_0px_rgba(28,44,91,0.2)] cursor-default select-none">
      {children}
    </span>
  )
}
