import { TUBES } from "./mockData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ tubes: TUBES }, { status: 200 });
}
