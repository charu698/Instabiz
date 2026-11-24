import { families, testimonial } from "@/lib/data";
export const metadata = { title: "Happy families — TeddyPups U.A.E." };
export default function Page() {
  return (<div className="wrap sec">
    <p className="hand">our wall of happy endings</p><h1 className="display">Happy families</h1>
    <p className="sub">Nothing makes us happier than seeing our puppies in loving homes! Here are some beautiful moments shared by our amazing clients after welcoming their furry friends.</p>
    <p className="hand">{families.length * 8} moments and counting</p>
    <blockquote className="quote">“{testimonial.quote}”<cite>{testimonial.by}</cite></blockquote>
    <div className="masonry">{families.map((f) => <figure key={f.cap}><img src={f.img} alt={f.cap} loading="lazy" /><figcaption>{f.cap}</figcaption></figure>)}</div>
    <p className="center hand">every one of them was a Teddy Pup once</p>
  </div>);
}
