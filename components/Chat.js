"use client";
import { useState } from "react";
import { waLink } from "@/lib/data";
export default function Chat() {
  const [open, setOpen] = useState(false);
  return (
    <div className="chat">
      {open && (
        <div className="chat-box">
          <div className="chat-head"><b>TeddyPups U.A.E.</b> <small>online</small></div>
          <div className="bubble">Hi TeddyPups! I'd love to know more about your puppies.</div>
          <a className="btn btn-green sm" href={waLink("Hi TeddyPups! I'd love to know more about your puppies.")} target="_blank" rel="noreferrer">Say hello on WhatsApp</a>
        </div>
      )}
      <button className="chat-fab" aria-label="Chat on WhatsApp" onClick={() => setOpen(!open)}>{open ? "×" : "💬"}</button>
    </div>
  );
}
