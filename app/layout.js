import "./globals.css";
import { Fraunces, Figtree, Shantell_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chat from "@/components/Chat";
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", weight: ["600", "700", "900"] });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });
const shantell = Shantell_Sans({ subsets: ["latin"], variable: "--font-shantell" });
export const metadata = { title: "TeddyPups U.A.E. — Premium teacup puppies in Dubai", description: "Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide." };
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${figtree.variable} ${shantell.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Chat />
      </body>
    </html>
  );
}
