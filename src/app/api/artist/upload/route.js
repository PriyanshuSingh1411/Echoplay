import { NextResponse } from "next/server";
import db from "@/lib/db";
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const title = formData.get("title");
    const artistName = formData.get("artistName");
    const file = formData.get("audio");

    if (!file) {
      return NextResponse.json(
        { message: "No file uploaded" },
        { status: 400 },
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "public/uploads");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = `/uploads/${Date.now()}-${file.name}`;
    const fullPath = path.join(process.cwd(), "public", filePath);

    fs.writeFileSync(fullPath, buffer);

    await db.query(
      "INSERT INTO artist_songs (title, artist_name, file_path) VALUES (?, ?, ?)",
      [title, artistName, filePath],
    );

    return NextResponse.json({ message: "Song uploaded successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Upload failed" }, { status: 500 });
  }
}
