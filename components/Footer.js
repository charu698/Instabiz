import Link from "next/link";
import { PHONE, EMAIL } from "@/lib/data";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot-grid">
        <div>
          <h2 className="display">Home, at last.</h2>
          <p>TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies, offering premium services and worldwide shipping.</p>
        </div>
        <div><h3>Explore</h3>
          <Link href="/puppies">Available puppies</Link><Link href="/gone-home">Gone home</Link><Link href="/happy-families">Happy families</Link>
          <Link href="/how-it-works">How it works</Link><Link href="/how-it-works#delivery">Delivery & collection</Link><Link href="/faq">FAQ</Link><Link href="/contact">Visit & contact</Link>
        </div>
        <div><h3>Say hello</h3>
          <a href="https://wa.me/971500000000">WhatsApp {PHONE}</a><a href={`mailto:${EMAIL}`}>{EMAIL}</a><span>Downtown Dubai, United Arab Emirates</span>
          <div className="social"><a href="#">Instagram</a><a href="#">TikTok</a><a href="#">Facebook</a></div>
        </div>
      </div>
      <p className="copy">© 2026 TeddyPups U.A.E. <span className="hand">every puppy is family</span></p>
    </footer>
  );
}
