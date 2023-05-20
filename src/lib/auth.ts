// vendors
import { cookies } from "next/headers";
import decode from "jwt-decode";

interface UserProps {
  sub: string;
  name: string;
  avatar_url: string;
}

export function getUser(): UserProps {
  const token = cookies().get("token")?.value;

  if (!token) throw new Error("UnAuthenticated");

  const user: UserProps = decode(token);

  return user;
}
