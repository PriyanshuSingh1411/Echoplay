"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role }),
    });

    const data = await res.json();

    alert(data.message);

    if (res.ok) {
      window.location.href = "/login";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded w-full max-w-md"
      >
        <h2 className="text-2xl text-green-400 mb-6 text-center">Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 bg-black border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 bg-black border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 bg-black border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <select
          className="w-full p-3 mb-6 bg-black border rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">Listener</option>
          <option value="artist">Artist</option>
        </select>

        <button className="w-full bg-green-500 py-2 rounded text-black">
          Register
        </button>
      </form>
    </div>
  );
}
