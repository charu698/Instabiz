import ContactForm from "@/components/ContactForm";
import { PHONE, EMAIL } from "@/lib/data";
export const metadata = { title: "Visit & contact — TeddyPups U.A.E." };
export default async function Page({ searchParams }) {
  const sp = await searchParams;
  return (<div className="wrap sec">
    <h1 className="display">Get in touch with us</h1>
    <p className="sub">Have questions about our puppies or adoption process? Fill out the form, and our team will get back to you promptly. Whether ready to adopt or just seeking info, we'd love to hear from you!</p>
    <div className="two"><ContactForm preset={sp.puppy || ""} />
      <div className="panel"><p><b>WhatsApp</b> <a href="https://wa.me/971500000000">{PHONE}</a></p><p><b>call us</b> <a href="tel:+971500000000">{PHONE}</a></p><p><b>email</b> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        <h3>Visit us in Downtown Dubai</h3><p>Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face.</p><p>Downtown Dubai, United Arab Emirates</p>
        <a className="btn btn-ghost" href="https://maps.google.com/?q=Downtown+Dubai" target="_blank" rel="noreferrer">Open in Google Maps</a></div></div>
  </div>);
}
