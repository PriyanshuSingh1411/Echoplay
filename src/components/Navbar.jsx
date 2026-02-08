import { getUserFromToken } from "@/lib/auth";
import Link from "next/link";

export default async function Navbar() {
  const user = await getUserFromToken();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-zinc-900 text-white">
      <h1 className="text-xl font-bold text-green-400">EchoPlay</h1>

      <div className="flex gap-6 text-sm items-center">
        <Link href="/">Home</Link>

        {user && user.role === "user" && <Link href="/explore">Explore</Link>}

        {user && user.role === "artist" && (
          <Link href="/artist/upload" className="text-green-400">
            Upload
          </Link>
        )}

        {!user && <Link href="/login">Login</Link>}

        {user && <span className="text-gray-400">Welcome {user.name}</span>}
      </div>
    </nav>
  );
}
