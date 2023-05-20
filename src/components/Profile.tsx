// vendors
import Image from "next/image";
// lib
import { getUser } from "@/lib/auth";

export function Profile() {
  const { name, avatar_url } = getUser();

  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatar_url}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <p className="max-w-[240px] text-sm leading-snug">
        {name}
        <a href={"/"} className="block text-red-400 hover:text-red-300">
          Logout
        </a>
      </p>
    </div>
  );
}
