"use client";
import { useState } from "react";
export default function Faq({ items }) {
  const [o, setO] = useState(0);
  return (
    <div className="faq">
      {items.map(([q, a], i) => (
        <div key={q} className={"faq-item" + (o === i ? " open" : "")}>
          <button aria-expanded={o === i} onClick={() => setO(o === i ? -1 : i)}><span className="q">?</span>{q}</button>
          {o === i && <p>{a}</p>}
        </div>
      ))}
    </div>
  );
}
