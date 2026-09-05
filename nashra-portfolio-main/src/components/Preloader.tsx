import { useEffect, useState } from "react";

/** Short professional opening animation shown on first load. */
export function Preloader() {
  const [hiding, setHiding] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true), 1100);
    const t2 = setTimeout(() => setDone(true), 1900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (done) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-all duration-700 ${
        hiding ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="mesh-bg pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative flex flex-col items-center gap-6 px-6 text-center">
        <span className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          <span className="text-gradient">NT</span>
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.36em] text-muted-foreground">
          Loading Portfolio
        </span>
        <span className="h-px w-40 overflow-hidden rounded-full bg-border sm:w-56">
          <span className="loader-bar block h-full w-full bg-gradient-to-r from-aqua via-glow to-violet" />
        </span>
      </div>
    </div>
  );
}
