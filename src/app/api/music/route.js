import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "bollywood";

  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${query}&media=music&limit=20`,
    );

    const data = await res.json();

    return NextResponse.json(data.results);
  } catch (error) {
    console.error(error);
    return NextResponse.json([], { status: 500 });
  }
}
