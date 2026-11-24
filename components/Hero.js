"use client";
import { useEffect, useState } from "react";
const words = ["Max", "Korean Teacup Maltipoo", "Korean Teacup Poodle", "Maltipoo & Cavapoo", "Toy Poodle", "Maltipoo"];
export default function Hero({ children }) {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI((x) => (x + 1) % words.length), 2600); return () => clearInterval(t); }, []);
  return <><div className="ticker" aria-live="polite"><span key={i}>{words[i]}</span></div>{children}</>;
}
