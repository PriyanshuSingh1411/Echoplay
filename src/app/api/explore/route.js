import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    // iTunes
    const itunesRes = await fetch(
      "https://itunes.apple.com/search?term=bollywood&media=music&limit=10",
    );
    const itunesData = await itunesRes.json();

    const formattedItunes = itunesData.results.map((song) => ({
      id: `itunes-${song.trackId}`,
      title: song.trackName,
      artist_name: song.artistName,
      file_path: song.previewUrl,
      cover: song.artworkUrl100?.replace("100x100", "400x400"),
      source: "itunes",
    }));

    // Local DB
    const [dbSongs] = await db.query(
      "SELECT * FROM artist_songs ORDER BY created_at DESC",
    );

    const formattedDB = dbSongs.map((song) => ({
      id: `local-${song.id}`,
      title: song.title,
      artist_name: song.artist_name,
      file_path: song.file_path,
      cover: song.cover_image || null,
      source: "local",
    }));

    return NextResponse.json([...formattedDB, ...formattedItunes]);
  } catch (error) {
    console.error(error);
    return NextResponse.json([], { status: 500 });
  }
}
