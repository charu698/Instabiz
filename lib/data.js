const m = (f) => `/media/${f}`;
export const WA = "https://wa.me/971500000000?text=";
export const waLink = (t) => WA + encodeURIComponent(t);
export const PHONE = "+971 50 000 0000";
export const EMAIL = "info@teddypups.ae";

export const puppies = [
  { slug: "maltipoo-max-male", name: "Max", breed: "Maltipoo", sex: "boy", age: "3 months", origin: "imported", video: true, img: "b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp" },
  { slug: "korean-teacup-maltipoo-female", name: "Korean Teacup Maltipoo", breed: "Maltipoo", sex: "girl", age: "2 months", origin: "imported", video: true, img: "b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg" },
  { slug: "korean-teacup-poodle-female", name: "Korean Teacup Poodle", breed: "Poodle", sex: "girl", age: "2 months", origin: "imported", img: "b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg" },
  { slug: "maltipoo-cavapoo-male", name: "Maltipoo & Cavapoo", breed: "Cavapoo", sex: "boy", age: "3 months Maltipoo & 2 months Cavapoo", origin: "local", video: true, img: "b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg" },
  { slug: "toy-poodle-male-female", name: "Toy Poodle", breed: "Poodle", sex: "boy & girl", age: "2 months", origin: "local", img: "b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg" },
  { slug: "maltipoo-female-2", name: "Maltipoo", breed: "Maltipoo", sex: "girl", age: "3 months", origin: "local", video: true, img: "b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg" },
  { slug: "pomeranian-female", name: "Pomeranian", breed: "Pomeranian", sex: "girl", age: "3 months", origin: "local", img: "b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg" },
  { slug: "copper-male", name: "Copper", breed: "Cavapoo", sex: "boy", age: "2 months", origin: "local", img: "b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg", sub: "Cavapoo" },
  { slug: "shitzu-female", name: "Shih Tzu", breed: "Shih Tzu", sex: "girl", age: "2 months", origin: "local", img: "b942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg" },
  { slug: "shitzu-male", name: "Shih Tzu", breed: "Shih Tzu", sex: "boy", age: "2 months", origin: "local", img: "b942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg" },
  { slug: "maltipoo-female-1", name: "Maltipoo", breed: "Maltipoo", sex: "girl", age: "2.5 months", origin: "local", img: "b942a5_7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg" },
  { slug: "maltipoo-female", name: "Maltipoo", breed: "Maltipoo", sex: "girl", age: "2 months", origin: "local", img: "b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg" },
  { slug: "korean-teacup-pomeranian-1", name: "Korean Teacup Pomeranian", breed: "Pomeranian", sex: "girl", age: "2 months", origin: "imported", img: "b942a5_a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg" },
  { slug: "korean-teacup-pomeranian", name: "Korean Teacup Pomeranian", breed: "Pomeranian", sex: "girl", age: "2 months", origin: "imported", img: "b942a5_967bb346583b4146acb56607f5da5f21-mv2.jpg" },
  { slug: "korean-teacup-pomeranian-male", name: "Korean Teacup Pomeranian", breed: "Pomeranian", sex: "boy", age: "2 months", origin: "imported", img: "b942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg" },
].map((p) => ({ ...p, img: m(p.img) }));

export const goneHome = [
  ["Ace", "Pomeranian, boy", "27b888_bac41adfadc44dce846a1c3fd0cdb0de-mv2.avif", "TeddyPups"],
  ["Leo", "Poodle, boy", "27b888_5f9a7189bb21477d832047aae2040921-mv2.avif", "TeddyPups"],
  ["Mia", "Maltipoo, girl", "27b888_747a4667fec640c69aad9bc045d61ac6-mv2.avif", "Dubai showroom"],
  ["Sadie", "Maltipoo, girl", "27b888_ea6e7e0fcd43447d854657b6de98d4cb-mv2.avif", "TeddyPups"],
  ["Pomeranian", "Pomeranian, boy", "27b888_5e612a215bf343328c08d99e0e9c5a37-mv2.avif", "TeddyPups"],
].map(([name, desc, f, from]) => ({ name, desc, img: m(f), from }));

export const families = [
  ["Lulu 🧸 with her new mummy ❤️", "27b888_323008bb0f6a41d4bde2a0da7206cd98f000.jpg"],
  ["Adorable Maltipoo baby 🧸❤️", "27b888_323008bb0f6a41d4bde2a0da7206cd98f001.jpg"],
  ["My new teddy puppy 🥰🧸", "27b888_323008bb0f6a41d4bde2a0da7206cd98f002.jpg"],
  ["Our new puppies 🧸🥰🤗", "27b888_323008bb0f6a41d4bde2a0da7206cd98f003.jpg"],
  ["New puppy 🧸😍", "27b888_7d940ce5701f48d98327e4a242b53ac4-mv2.jpg"],
  ["Gang of 3 😍🧸", "27b888_15920f828b864dd1b44b98ec4e964c53-mv2.jpg"],
  ["So happy 😍😍", "27b888_bc27df54dcce410196c6016475364ff3-mv2.jpg"],
  ["New pup 🤗💫", "27b888_082e47dfd8144423a96dc70d966fa5b2-mv2.jpg"],
].map(([cap, f]) => ({ cap, img: m(f) }));

export const testimonial = {
  quote: "TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind.",
  by: "Sarah M., Dubai, UAE",
};

export const faqs = [
  ["Are your puppies vaccinated and health-checked?", "Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family."],
  ["Can I meet a puppy before I decide?", "Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision."],
  ["Can I take my puppy home the same day?", "Local puppies are available immediately, so you can take your puppy home the same day."],
  ["Do you import puppies from abroad?", "Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond — and we handle the import for you."],
  ["How does an imported puppy travel to Dubai?", "We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free."],
  ["Will I see photos and health details first?", "Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp."],
  ["Do you deliver?", "Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world."],
  ["Which breeds do you usually have?", "Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie."],
  ["Is there help after my puppy comes home?", "Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend."],
];

export const breeds = [["maltipoo", "Maltipoo"], ["pomeranian", "Pomeranian"], ["poodle", "Poodle"], ["cavapoo", "Cavapoo"], ["shih-tzu", "Shih Tzu"]];
export const breedKey = (p) => p.breed.toLowerCase().replace(" ", "-");

export const steps = [
  ["Choose your breed", "Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle."],
  ["Get photos & details", "Our team will share real photos, health details, and all necessary information directly on WhatsApp."],
  ["Secure & safe delivery", "Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free."],
];

export const trust = [
  ["Vet-checked & healthy", "Every puppy comes vaccinated, dewormed, and with a verified health certificate."],
  ["Korea to Dubai, safely", "Trusted breeders, safe travel, and premium care from start to finish."],
  ["Support 24/7", "Always here to help, from choosing your puppy to post-delivery support."],
  ["Trusted by families worldwide", "Puppies delivered to loving homes all around the world."],
];
