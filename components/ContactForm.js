"use client";
import { useState } from "react";
import { puppies } from "@/lib/data";
export default function ContactForm({ preset = "" }) {
  const [st, setSt] = useState("idle");
  async function submit(e) {
    e.preventDefault();
    setSt("sending");
    const body = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      setSt(r.ok ? "done" : "error");
    } catch { setSt("error"); }
  }
  if (st === "done") return <div className="letter"><h2 className="display">Letter posted! 💌</h2><p>Thanks — our team will get back to you promptly.</p></div>;
  return (
    <form className="letter" onSubmit={submit}>
      <p className="lead">Dear TeddyPups,</p>
      <p>my name is <input name="name" required placeholder="your name" aria-label="Name" />, and you can reach me on <input name="phone" required placeholder="phone / WhatsApp" aria-label="Phone" /> or by email at <input name="email" type="email" required placeholder="you@email.com" aria-label="Email" />.</p>
      <p>I live in <input name="city" placeholder="city" aria-label="City" />, and I'm curious about</p>
      <label>Puppy you're interested in (optional)
        <select name="puppy" defaultValue={preset}>
          <option value="">any puppy (not sure yet)</option>
          {puppies.map((p) => <option key={p.slug} value={p.slug}>{p.name} ({p.breed !== p.name ? `${p.breed}, ` : ""}{p.sex})</option>)}
        </select>
      </label>
      <label>Your message (optional)<textarea name="message" rows="4" /></label>
      <input name="website" className="hp" tabIndex="-1" autoComplete="off" aria-hidden="true" />
      <p className="sign hand">with love, a future puppy parent</p>
      <button className="btn btn-toffee" disabled={st === "sending"}>{st === "sending" ? "Posting…" : "Post my letter"}</button>
      {st === "error" && <p className="err">Something went wrong — please try WhatsApp instead.</p>}
    </form>
  );
}
