import Link from "next/link";

export default function ArtistDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-8">Artist Dashboard 🎤</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/artist/upload"
          className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition"
        >
          <h2 className="text-lg font-medium mb-2">Upload Song</h2>
          <p className="text-sm text-gray-400">Add new music to EchoPlay</p>
        </Link>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-lg font-medium mb-2">My Songs</h2>
          <p className="text-sm text-gray-400">View your uploaded tracks</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-lg font-medium mb-2">Analytics</h2>
          <p className="text-sm text-gray-400">Track performance</p>
        </div>
      </div>
    </div>
  );
}
