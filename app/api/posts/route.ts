import { NextRequest, NextResponse } from "next/server";
import Joi from "joi";
import prisma from "@/prisma/client";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { error } = validateStory(body);
  if (error)
    return NextResponse.json(error.details[0].message, { status: 400 });
  const { userId, img, text } = body;
  const story = await prisma.post.create({
    data: { userId, img, text },
  });
  return NextResponse.json(story, { status: 201 });
};

interface Story {
  userId: string;
  text: string;
  img: string;
}

const validateStory = (story: Story) => {
  const schema = Joi.object({
    userId: Joi.string().required(),
    text: Joi.string(),
    img: Joi.string(),
  });
  return schema.validate(story);
};
