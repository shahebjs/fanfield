import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const body = await req.json();

  return body;
};
