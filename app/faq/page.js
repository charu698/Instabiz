import Faq from "@/components/Faq";
import { faqs } from "@/lib/data";
export const metadata = { title: "FAQ — TeddyPups U.A.E." };
export default function Page() {
  const ld = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  return (<div className="wrap sec narrow"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    <h1 className="display">Questions, answered</h1><Faq items={faqs} /></div>);
}
