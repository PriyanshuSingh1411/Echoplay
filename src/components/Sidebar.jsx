"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const linkStyle = (path) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
      pathname === path
        ? "bg-green-500/20 text-green-400"
        : "text-gray-400 hover:bg-zinc-800 hover:text-white"
    }`;

  return (
    <div className="w-64 bg-[#121212] h-screen p-6 flex flex-col fixed left-0 top-0 border-r border-zinc-800">
      <h1 className="text-xl font-semibold text-white mb-10 tracking-wide">
        EchoPlay
      </h1>

      <nav className="space-y-2">
        <Link href="/" className={linkStyle("/")}>
          <span>🏠</span> Home
        </Link>

        <Link href="/explore" className={linkStyle("/explore")}>
          <span>🔍</span> Explore
        </Link>

        <Link href="/library" className={linkStyle("/library")}>
          <span>🎵</span> Library
        </Link>

        <Link href="/playlist" className={linkStyle("/playlist")}>
          <span>📁</span> Playlists
        </Link>
      </nav>

      <div className="mt-auto pt-6 border-t border-zinc-800 text-xs text-gray-500">
        © 2026 EchoPlay
      </div>
    </div>
  );
}
