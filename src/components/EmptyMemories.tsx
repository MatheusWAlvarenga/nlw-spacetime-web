import Link from "next/link";

export function EmptyMemories(status: any) {
  return (
    <div className="flex flex-1 items-center justify-center">
      {!status.logout ? (
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <p className="w-[360px] text-center leading-relaxed">
            <span className="underline">Crie sua conta ou faça login</span>
          </p>
        </a>
      ) : (
        <p className="w-[360px] text-center leading-relaxed">
          Você ainda não registrou nenhuma lembrança, comece a{" "}
          <Link
            href="/memories/new"
            className="underline transition-colors hover:text-gray-50"
          >
            criar agora
          </Link>
        </p>
      )}
    </div>
  );
}
