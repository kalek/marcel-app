import { NextResponse } from 'next/server';

import { TUBES } from './mockData';

export async function GET() {
  return NextResponse.json({ tubes: TUBES }, { status: 200 });
}
