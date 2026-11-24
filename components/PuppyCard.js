import Link from "next/link";
export default function PuppyCard({ p }) {
  return (
    <Link href={`/puppies/${p.slug}`} className="card">
      <div className="card-img">
        <img src={p.img} alt={`${p.name}, ${p.breed} puppy`} loading="lazy" />
        <span className="tag">Available</span>
        {p.video && <span className="tag vid">▶ video</span>}
      </div>
      <h3>{p.name}</h3>
      <p>{p.sex} · {p.age}</p>
    </Link>
  );
}
