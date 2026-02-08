import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function getUserFromToken() {
  const cookieStore = await cookies(); // 👈 MUST use await
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch {
    return null;
  }
}
