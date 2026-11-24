import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "./Gallery";
import { puppies, waLink } from "@/lib/data";
export async function generateStaticParams() { return puppies.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }) { const { slug } = await params; const p = puppies.find((x) => x.slug === slug); return { title: p ? `${p.name} — TeddyPups U.A.E.` : "Puppy" }; }
export default async function Puppy({ params }) {
  const { slug } = await params;
  const p = puppies.find((x) => x.slug === slug);
  if (!p) notFound();
  const others = puppies.filter((x) => x.slug !== slug).slice(0, 4);
  const imgs = [p.img, ...others.slice(0, 2).map((o) => o.img)];
  return (
    <div className="wrap sec">
      <p className="crumbs"><Link href="/puppies">Available puppies</Link> / {p.name}</p>
      <div className="detail">
        <Gallery imgs={imgs} video={p.video} alt={p.name} />
        <div>
          <span className="tag inline">Available</span>
          <h1 className="display">{p.name}</h1>
          <p className="hand">{p.breed}</p>
          <dl className="facts">
            <dt>Breed</dt><dd>{p.breed}</dd><dt>Boy or girl</dt><dd className="cap">{p.sex}</dd><dt>Age</dt><dd>{p.age}</dd>
            <dt>Where</dt><dd>{p.origin === "imported" ? "Imported for you" : "In Dubai"}</dd>
          </dl>
          <a className="btn btn-green" href={waLink(`Hi TeddyPups! I'd like to ask about ${p.name} (${p.breed}, ${p.sex}).`)} target="_blank" rel="noreferrer">Ask about {p.name} on WhatsApp</a>{" "}
          <Link className="btn btn-ghost" href={`/contact?puppy=${p.slug}`}>Send an enquiry</Link>
        </div>
      </div>
      <h2 className="display mt">What comes with {p.name}</h2>
      <p className="sub">Every Teddy Pup comes</p>
      <ul className="ticks"><li>Vaccinated</li><li>Dewormed</li><li>Verified health certificate from a licensed vet</li><li>Support 24/7 after they come home</li></ul>
      <h2 className="display mt">More puppies</h2>
      <div className="grid">{others.map((o) => <Link key={o.slug} href={`/puppies/${o.slug}`} className="card"><div className="card-img"><img src={o.img} alt={o.name} loading="lazy" /></div><h3>{o.name}</h3><p>{o.sex} · {o.age}</p></Link>)}</div>
    </div>
  );
}
