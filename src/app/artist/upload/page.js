"use client";

import { useState } from "react";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [artistName, setArtistName] = useState("");
  const [audioFile, setAudioFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("artistName", artistName);
    formData.append("audio", audioFile);

    const res = await fetch("/api/artist/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-semibold mb-8">Upload New Song 🎵</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-xl max-w-xl"
      >
        <div className="mb-6">
          <label className="block mb-2">Song Title</label>
          <input
            type="text"
            className="w-full p-3 rounded bg-zinc-800"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">Artist Name</label>
          <input
            type="text"
            className="w-full p-3 rounded bg-zinc-800"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">Upload Audio</label>
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => setAudioFile(e.target.files[0])}
          />
        </div>

        <button className="bg-green-500 px-6 py-2 rounded text-black">
          Upload
        </button>
      </form>
    </div>
  );
}
