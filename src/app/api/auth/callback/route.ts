import { api } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";
import checkExpiresIn from "@/utility/checkExpiresIn";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  const registerResponse = await api.post("/register", {
    code,
  });

  const { token, expiresIn } = registerResponse.data;

  console.log("token: ", token);
  console.log("expiresIn: ", expiresIn);

  const expiresInFormattedInSeconds = checkExpiresIn(expiresIn);

  const redirectURL = new URL("/", request.url);

  return NextResponse.redirect(redirectURL, {
    headers: {
      "Set-Cookie": `token=${token}; Path=/; max-age=${expiresInFormattedInSeconds}`,
    },
  });
}
