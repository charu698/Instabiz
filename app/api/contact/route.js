import { NextResponse } from "next/server";
export async function POST(req) {
  const b = await req.json().catch(() => null);
  if (!b || b.website) return NextResponse.json({ ok: true });
  const ok = (s, n) => typeof s === "string" && s.trim().length > 0 && s.length <= n;
  if (!ok(b.name, 100) || !ok(b.phone, 40) || !/^\S+@\S+\.\S+$/.test(b.email || "")) return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  console.log("[enquiry]", JSON.stringify({ name: b.name, phone: b.phone, email: b.email, city: b.city, puppy: b.puppy, message: (b.message || "").slice(0, 2000) }));
  return NextResponse.json({ ok: true });
}
