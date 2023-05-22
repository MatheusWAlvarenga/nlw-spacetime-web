import { cookies } from "next/headers";
// components
import { EmptyMemories } from "@/components/EmptyMemories";

export default function Home() {
  const isAuthenticated = cookies().has("token");
  return <EmptyMemories logout={isAuthenticated} />;
}
