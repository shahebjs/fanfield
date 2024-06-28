import { Grid } from "@radix-ui/themes";
import React from "react";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const AuthButtons = () => {
  return (
    <Grid columns="1fr 1fr" gap="3">
      <Button variant="outline" className="text-xl">
        <FcGoogle />
      </Button>
      <Button variant="outline" className="text-xl">
        <FaGithub />
      </Button>
    </Grid>
  );
};

export default AuthButtons;
