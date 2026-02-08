"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function ExplorePage() {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    fetch("/api/explore")
      .then((res) => res.json())
      .then((data) => setSongs(data));
  }, []);

  return (
    <div className="flex bg-[#0f172a] min-h-screen text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-64 flex-1 p-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold">Explore Music</h1>
          <p className="text-gray-400 mt-2">
            Discover trending tracks and artist uploads
          </p>
        </div>

        {/* GRID CONTAINER */}
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {songs.map((song) => (
              <div
                key={song.id}
                onClick={() => setCurrentSong(song)}
                className="bg-[#181818] rounded-xl p-5 hover:bg-[#222] transition cursor-pointer"
              >
                <div className="w-full aspect-square bg-[#2a2a2a] rounded-lg mb-4 flex items-center justify-center text-3xl"></div>
                <div className="w-full aspect-square rounded-lg mb-4 overflow-hidden bg-[#2a2a2a]">
                  {song.cover ? (
                    <img
                      src={song.cover}
                      alt={song.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-3xl">
                      🎵
                    </div>
                  )}
                </div>

                <p className="text-sm font-semibold truncate">{song.title}</p>

                <p className="text-xs text-gray-400 truncate mt-1">
                  {song.artist_name}
                </p>

                {song.source === "local" && (
                  <span className="text-xs text-green-400 mt-2 inline-block">
                    Artist Upload
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* FIXED PLAYER */}
      {currentSong && (
        <div className="fixed bottom-0 left-64 right-0 bg-[#181818] border-t border-[#333] px-12 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">{currentSong.title}</p>
              <p className="text-xs text-gray-400">{currentSong.artist_name}</p>
            </div>

            <audio
              controls
              autoPlay
              src={currentSong.file_path}
              className="w-1/2"
            />
          </div>
        </div>
      )}
    </div>
  );
}
