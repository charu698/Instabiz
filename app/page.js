import Link from "next/link";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";
import PuppyCard from "@/components/PuppyCard";
import { puppies, steps, trust, testimonial, families, faqs, breeds, waLink } from "@/lib/data";
export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <p className="hand">every puppy is family</p>
        <h1 className="display">Premium teacup <br />puppies in Dubai</h1>
        <p className="sub">Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.</p>
        <div className="cta">
          <Link className="btn btn-toffee" href="/puppies">View available puppies</Link>
          <a className="btn btn-ghost" href={waLink("Hi TeddyPups! I'd love to know more about your puppies.")} target="_blank" rel="noreferrer">Enquire on WhatsApp</a>
        </div>
        <Hero />
        <div className="scallop" aria-hidden="true" />
      </section>

      <section className="wrap sec">
        <p className="hand">Meet the pups</p>
        <h2 className="display">Real puppies, real photos, looking for their families right now.</h2>
        <div className="grid">{puppies.slice(0, 15).map((p) => <PuppyCard key={p.slug} p={p} />)}</div>
        <p className="center"><Link className="btn btn-toffee" href="/puppies">See all available puppies</Link></p>
      </section>

      <section className="wrap sec">
        <h2 className="display">Two ways to meet your puppy</h2>
        <div className="two">
          <div className="panel honey"><span className="chip">Puppies in Dubai</span><h3>In our showroom</h3><p>See them, love them, take them home. Come meet our locally available puppies before you decide.</p><Link className="btn btn-toffee" href="/puppies?origin=local">Meet local puppies</Link></div>
          <div className="panel sky"><span className="chip">Imported for you</span><p className="route">Korea → Dubai</p><p>Exclusive Korean teacup puppies, delivered. Order from the world's most reputable breeders and let us handle the import.</p><Link className="btn btn-toffee" href="/puppies?origin=imported">See imported puppies</Link></div>
        </div>
      </section>

      <section className="wrap sec">
        <h2 className="display">Your puppy journey</h2>
        <p className="sub">A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.</p>
        <ol className="steps">{steps.map(([t, d], i) => <li key={t}><span className="num">{i + 1}</span><h3>{t}</h3><p>{d}</p></li>)}</ol>
        <div className="chips">{breeds.map(([k, l]) => <Link key={k} className="chip lnk" href={`/puppies?breed=${k}`}>{l}</Link>)}</div>
        <p className="center"><Link className="btn btn-ghost" href="/how-it-works">How it works</Link> <a className="btn btn-green" href={waLink("Hi TeddyPups!")} target="_blank" rel="noreferrer">Say hello on WhatsApp</a></p>
      </section>

      <section className="wrap sec">
        <p className="hand">puppy passport</p>
        <h2 className="display">Why families trust TeddyPups</h2>
        <div className="grid4">{trust.map(([t, d]) => <div key={t} className="panel"><h3>{t}</h3><p>{d}</p></div>)}</div>
      </section>

      <section className="wrap sec">
        <h2 className="display">Happy families & puppies</h2>
        <p className="sub">We are truly honored to see our puppies become cherished members of loving families. These heartwarming moments have been shared by our valued clients who welcomed a Teddy Pup into their homes and hearts.</p>
        <blockquote className="quote">“{testimonial.quote}”<cite>{testimonial.by}</cite></blockquote>
        <div className="masonry">{families.map((f) => <figure key={f.cap}><img src={f.img} alt={f.cap} loading="lazy" /><figcaption>{f.cap}</figcaption></figure>)}</div>
        <p className="center"><Link className="btn btn-ghost" href="/happy-families">See every happy family</Link></p>
      </section>

      <section className="wrap sec narrow">
        <h2 className="display">Questions, answered</h2>
        <Faq items={faqs.slice(0, 3)} />
        <p className="center"><Link className="btn btn-ghost" href="/faq">Read all questions</Link></p>
      </section>

      <section className="wrap sec"><div className="panel cta-final">
        <p className="hand">welcome home</p>
        <h2 className="display">Ready to meet your new best friend?</h2>
        <p>Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We help you find the right match and ensure a smooth, safe delivery across the UAE.</p>
        <Link className="btn btn-toffee" href="/puppies">View available puppies</Link>
      </div></section>
    </>
  );
}
