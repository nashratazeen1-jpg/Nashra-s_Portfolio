import { useEffect, useRef, useState } from "react";

type TypeOnceProps = {
  text: string;
  speed?: number;
  className?: string;
};

export function TypeOnce({ text, speed = 45, className }: TypeOnceProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || started) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || count >= text.length) return;
    const id = window.setTimeout(() => setCount((c) => c + 1), speed);
    return () => window.clearTimeout(id);
  }, [started, count, text.length, speed]);

  const done = count >= text.length;

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      {started && !done && (
        <span aria-hidden="true" className="ml-0.5 inline-block w-[2px] animate-pulse self-stretch bg-aqua align-middle" style={{ height: "1em" }} />
      )}
    </span>
  );
}
