import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
interface Props {
  params: {
    id: string;
  };
}

export const PATCH = async (req: NextRequest, { params }: Props) => {
  const body = await req.json();
  const updatedUser = await prisma.user.update({
    where: { id: params.id },
    data: {
      ...body,
    },
  });
  if (!updatedUser)
    return NextResponse.json("Something went worn", { status: 400 });
  return NextResponse.json(updatedUser, { status: 200 });
};
