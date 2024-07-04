import prisma from "@/prisma/client";
import bcrypt from "bcrypt";
import Joi from "joi";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const { error } = validateUser(body);
  if (error)
    return NextResponse.json(error.details[0].message, { status: 400 });
  const { firstName, lastName, email, password } = body;
  const checkUser = await prisma.user.findUnique({ where: { email } });
  if (checkUser)
    return NextResponse.json("User Already Exist", { status: 409 });

  // Hashed password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = await prisma.user.create({
    data: {
      name: firstName + " " + lastName,
      email,
      password: hashPassword,
    },
  });

  return NextResponse.json(newUser, { status: 201 });
};

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const validateUser = (user: User) => {
  const schema = Joi.object({
    firstName: Joi.string().min(1).max(255).required().label("First Name"),
    lastName: Joi.string().min(1).max(255).required().label("Last Name"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .max(1000)
      .required()
      .label("Email"),
    password: Joi.string().min(8).max(1000).required().label("Password"),
  });
  return schema.validate(user);
};
