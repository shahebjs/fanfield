import { NextRequest, NextResponse } from "next/server";
import Joi from "joi";
import prisma from "@/prisma/client";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { error } = validateStory(body);
  if (error)
    return NextResponse.json(error.details[0].message, { status: 400 });
  const { userId, img } = body;
  const story = await prisma.story.create({
    data: { userId, img },
  });
  return NextResponse.json(story, { status: 201 });
};

interface Story {
  userId: string;
  img: string;
}

const validateStory = (story: Story) => {
  const schema = Joi.object({
    userId: Joi.string().required(),
    img: Joi.string().required(),
  });
  return schema.validate(story);
};
