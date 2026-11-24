"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { waLink } from "@/lib/data";
const nav = [["/", "Home"], ["/puppies", "Puppies"], ["/happy-families", "Happy families"], ["/how-it-works", "How it works"], ["/faq", "FAQ"], ["/contact", "Visit & contact"]];
export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const act = (h) => (h === "/" ? path === "/" : path.startsWith(h));
  return (
    <header className="site-header">
      <Link href="/" className="brand" onClick={() => setOpen(false)}>
        <img src="/brand/logo.png" alt="" width="40" height="40" /> <span>TeddyPups</span>
      </Link>
      <nav className="nav-desktop" aria-label="Main">
        {nav.map(([h, l]) => <Link key={h} href={h} className={act(h) ? "active" : ""}>{l}</Link>)}
      </nav>
      <a className="btn btn-green sm hide-m" href={waLink("Hi TeddyPups! I'd love to know more about your puppies.")} target="_blank" rel="noreferrer">WhatsApp us</a>
      <button className="burger" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
      {open && (
        <div className="drawer">
          <p className="hand">where to, friend?</p>
          {nav.map(([h, l]) => <Link key={h} href={h} onClick={() => setOpen(false)}>{l}</Link>)}
          <a className="btn btn-green" href={waLink("Hi TeddyPups!")} target="_blank" rel="noreferrer">WhatsApp us</a>
        </div>
      )}
    </header>
  );
}
