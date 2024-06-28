"use client";
import { Grid } from "@radix-ui/themes";
import React from "react";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const AuthButtons = () => {
  return (
    <Grid columns="1fr 1fr" gap="3">
      <Button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        variant="outline"
        className="text-xl"
      >
        <FcGoogle />
      </Button>
      <Button
        onClick={() => signIn("github", { callbackUrl: "/" })}
        variant="outline"
        className="text-xl"
      >
        <FaGithub />
      </Button>
    </Grid>
  );
};

export default AuthButtons;
