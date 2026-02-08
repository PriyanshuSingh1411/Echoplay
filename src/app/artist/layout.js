import { getUserFromToken } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ArtistLayout({ children }) {
  const user = await getUserFromToken();

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "artist") {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-10">{children}</div>
  );
}
