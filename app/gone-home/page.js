import Link from "next/link";
export const metadata = { title: "Gone home — TeddyPups U.A.E." };
const names = [["Ace","Pomeranian, boy","TeddyPups"],["Leo","Poodle, boy","TeddyPups"],["Mia","Maltipoo, girl","Dubai showroom"],["Sadie","Maltipoo, girl","TeddyPups"],["Pomeranian","Boy","TeddyPups"],["Ollie","Pomsky, boy","TeddyPups"],["Bruno","Maltipoo, boy","Dubai showroom"],["Buddy","Maltese, boy","Dubai showroom"],["Charlie","Maltese, boy","TeddyPups"],["Daisy","Pomeranian, girl","Dubai showroom"],["Bella","Pomeranian, girl","TeddyPups"],["Teddy","Poodle, boy","TeddyPups"],["Molly","Poodle, girl","Dubai showroom"],["Coco","Pomsky, girl","TeddyPups"],["Rosie","Pomsky, girl","Dubai showroom"],["Rocky","Poodle, boy","TeddyPups"],["Sophie","Maltipoo, girl","Dubai showroom"],["Lola","Maltipoo, girl","Dubai showroom"],["Rex","Pomeranian, boy","Dubai showroom"],["Finn","Pomsky, boy","TeddyPups"],["Zoe","Maltipoo, girl","TeddyPups"],["Mimi","Pomeranian, girl","Dubai showroom"],["Bailey","Bichon, boy","Dubai showroom"]];
export default function Page() {
  return (<div className="wrap sec"><h1 className="display">Gone home</h1>
    <p className="sub">Every puppy here has already joined a loving family. Looking for one just like them? Tell us — we'll help you find your match.</p>
    <p><Link className="btn btn-toffee" href="/puppies">See available puppies</Link></p>
    <div className="tickets">{names.map(([n, d, f]) => <div key={n+d} className="ticket"><small>one ticket home</small><h3>{n}</h3><p>{d}</p><p className="from">{f}</p><span className="hand">home ♥</span><small>admit one</small></div>)}</div></div>);
}
