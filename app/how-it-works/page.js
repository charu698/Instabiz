import Link from "next/link";
import { trust } from "@/lib/data";
export const metadata = { title: "How it works — TeddyPups U.A.E." };
const local = [["Explore our puppies", "Browse our website to view the available puppies. Each listing includes photos, breed details, age, and health information."], ["Choose your puppy", "Once you find a puppy you love, open their profile for more information or to enquire further. You can also reach out to us directly if you have any questions."], ["Meet before you choose", "Spend time bonding before making your decision."], ["Pick-up or delivery", "Pick up your puppy from us or have them delivered to your home within Dubai. Our delivery service is safe and reliable, ensuring your puppy arrives comfortably."]];
const imp = [["Reserve your puppy", "Browse our selection of available breeds and place a reservation for the teacup puppy that captures your heart. Our reservation-only model ensures that each puppy is specifically sourced to meet your expectations."]];
const Steps = ({ s }) => <ol className="steps">{s.map(([t, d], i) => <li key={t}><span className="num">{i + 1}</span><h3>{t}</h3><p>{d}</p></li>)}</ol>;
export default function Page() {
  return (<div className="wrap sec">
    <h1 className="display">How it works</h1>
    <p className="sub">Whether you choose to visit us locally or order a premium breed from overseas, TeddyPups is here to make the experience unforgettable.</p>
    <nav className="toc"><a href="#ways">1 Two ways home</a><a href="#promise">2 Our premium puppy promise</a><a href="#delivery">3 Delivery & collection</a><a href="#why">4 Why choose us</a></nav>
    <section id="ways"><p className="hand">choose your way</p><h2 className="display">Two ways home</h2>
      <div className="two"><div className="panel honey"><span className="chip">In Dubai</span> <span className="chip">meet in person</span><h3>Meet your puppy in person</h3><p>Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. We source healthy, well-socialized puppies from trusted local breeders, ensuring they're raised with care, proper nutrition, and veterinary checks.</p><Steps s={local} /></div>
      <div className="panel sky"><span className="chip">Imported</span> <span className="chip">order upon request</span><h3>Order upon request</h3><p>Looking for a truly exceptional companion? Our Order Upon Request service gives you access to some of the world's most sought-after teacup breeds — ethically sourced from the most reputable, certified breeders across Europe, Korea, and beyond.</p><p>From Korean teacup poodles to rare Maltese, Pom, and Yorkie lines, we bring the world's finest puppies to Dubai, just for you.</p><Steps s={imp} /></div></div></section>
    <section id="promise"><h2 className="display">Our premium puppy promise</h2><div className="grid4">{trust.map(([t, d]) => <div key={t} className="panel"><h3>{t}</h3><p>{d}</p></div>)}</div></section>
    <section id="delivery"><h2 className="display">Delivery & collection</h2><p className="sub">Pick up from our Downtown Dubai showroom, or have your puppy delivered safely within Dubai. For imports we manage health checks, travel arrangements and documentation, and our trusted international cargo partners deliver puppies to loving homes all around the world.</p></section>
    <section id="why"><h2 className="display">Why choose us</h2><p className="sub">Real photos, verified health certificates, 24/7 support and a concierge experience from first hello to forever home.</p><Link className="btn btn-toffee" href="/puppies">View available puppies</Link></section>
  </div>);
}
