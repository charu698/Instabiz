import Link from "next/link";
import PuppyCard from "@/components/PuppyCard";
import { puppies, goneHome, breeds, breedKey } from "@/lib/data";
export const metadata = { title: "Available puppies — TeddyPups U.A.E." };
export default async function Puppies({ searchParams }) {
  const sp = await searchParams;
  const list = puppies.filter((p) => (!sp.origin || p.origin === sp.origin) && (!sp.breed || breedKey(p) === sp.breed));
  const f = (q) => "/puppies" + (q ? `?${q}` : "");
  return (
    <div className="wrap sec">
      <p className="hand">from Teddy's sketchbook</p>
      <h1 className="display">Available puppies</h1>
      <p className="sub">Every listing shows real photos of the actual puppy. Open a profile to see them all, then ask us about them on WhatsApp.</p>
      <div className="chips">
        <Link className={"chip lnk" + (!sp.origin && !sp.breed ? " on" : "")} href="/puppies">All</Link>
        <Link className={"chip lnk" + (sp.origin === "local" ? " on" : "")} href={f("origin=local")}>In Dubai</Link>
        <Link className={"chip lnk" + (sp.origin === "imported" ? " on" : "")} href={f("origin=imported")}>Imported</Link>
        {breeds.map(([k, l]) => <Link key={k} className={"chip lnk" + (sp.breed === k ? " on" : "")} href={f(`breed=${k}`)}>{l}</Link>)}
      </div>
      {list.length ? <div className="grid">{list.map((p) => <PuppyCard key={p.slug} p={p} />)}</div> : <p className="center">No puppies match that filter right now — ask us on WhatsApp!</p>}
      <h2 className="display mt">Already gone home</h2>
      <p className="sub">These puppies have found their families.</p>
      <div className="grid">{goneHome.map((g) => <div key={g.name} className="card gone"><div className="card-img"><img src={g.img} alt={g.name} loading="lazy" /><span className="tag">gone home ♥</span></div><h3>{g.name}</h3></div>)}</div>
      <p className="center"><Link className="btn btn-ghost" href="/gone-home">See the puppies who've gone home</Link></p>
    </div>
  );
}
