export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-green-400">EchoPlay 🎧</h1>

      <p className="mt-4 text-gray-400 max-w-md">
        Stream music and podcasts. Artists upload. Listeners vibe.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/login"
          className="px-6 py-2 bg-green-500 text-black font-semibold rounded hover:bg-green-400"
        >
          Login
        </a>

        <a
          href="/register"
          className="px-6 py-2 border border-green-500 rounded hover:bg-green-500 hover:text-black"
        >
          Register
        </a>
      </div>
    </main>
  );
}
