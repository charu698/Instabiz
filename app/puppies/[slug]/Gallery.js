"use client";
import { useState } from "react";
export default function Gallery({ imgs, video, alt }) {
  const [i, setI] = useState(0);
  const n = imgs.length;
  return (
    <div className="gallery">
      <div className="g-main"><img src={imgs[i]} alt={`${alt} photo ${i + 1}`} />{video && <span className="tag vid">▶</span>}</div>
      <div className="g-ctrl"><button onClick={() => setI((i + n - 1) % n)} aria-label="Previous photo">‹</button><span>{i + 1} / {n}</span><button onClick={() => setI((i + 1) % n)} aria-label="Next photo">›</button></div>
      <div className="g-thumbs">{imgs.map((s, k) => <button key={k} className={k === i ? "on" : ""} onClick={() => setI(k)} aria-label={`Photo ${k + 1}`}><img src={s} alt="" /></button>)}</div>
    </div>
  );
}
