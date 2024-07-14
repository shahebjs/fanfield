"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";

const LogoutBtn = () => {
  return (
    <Button
      onClick={() => signOut({ callbackUrl: "/login" })}
      variant="secondary"
    >
      Logout
    </Button>
  );
};

export default LogoutBtn;
