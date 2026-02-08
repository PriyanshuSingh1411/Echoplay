import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT * FROM artist_songs ORDER BY created_at DESC",
    );

    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json([], { status: 500 });
  }
}
