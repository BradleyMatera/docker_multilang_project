import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json({ error: "Provide a language identifier e.g. /api/demo/c" }, { status: 400 });
}
