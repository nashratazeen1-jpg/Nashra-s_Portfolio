import { useEffect, useState } from "react";

/** Types and deletes through a list of titles on a loop. */
export function TypeCycle({ items, className }: { items: string[]; className?: string }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = items[index] ?? "";
    if (!deleting && text === full) {
      const hold = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(hold);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % items.length);
      return;
    }
    const step = setTimeout(
      () => setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)),
      deleting ? 34 : 62,
    );
    return () => clearTimeout(step);
  }, [text, deleting, index, items]);

  return (
    <p className={className} aria-label={items.join(", ")}>
      <span>{text || "\u00A0"}</span>
      <span className="type-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.12em] bg-aqua align-middle" />
    </p>
  );
}
