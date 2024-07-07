import prisma from "@/prisma/client";
import Joi from "joi";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { error } = validateStory(body);
  if (error)
    return NextResponse.json(error.details[0].message, { status: 400 });
  const { userId, postId } = body;

  const alreadyLiked = await prisma.like.findFirst({
    where: { userId, postId },
  });

  if (alreadyLiked) {
    const deletedLike = await prisma.like.delete({
      where: { id: alreadyLiked.id },
    });
    return NextResponse.json(deletedLike, { status: 200 });
  } else {
    const likes = await prisma.like.create({
      data: { userId, postId },
    });
    return NextResponse.json(likes, { status: 201 });
  }
};

interface Story {
  userId: string;
  img: string;
}

const validateStory = (story: Story) => {
  const schema = Joi.object({
    userId: Joi.string().required(),
    postId: Joi.string().required(),
  });
  return schema.validate(story);
};
