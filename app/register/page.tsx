import { Container, Grid } from "@radix-ui/themes";
import React from "react";
import RegisterForm from "./RegisterForm";
import AuthButtons from "@/components/AuthButtons";
import Or from "@/components/Or";
import Link from "next/link";

const page = () => {
  return (
    <Container className="px-6">
      <Grid
        columns={{ initial: "1f", sm: "1fr 1fr" }}
        className="h-dvh"
        align="center"
      >
        <div className="space-y-2 text-center md:text-start">
          <h1 className="text-primary font-semibold text-4xl md:text-5xl lg:text-6xl">
            FanField
          </h1>
          <p className="text-xl md:text-2xl">
            FanField helps you connect and share with the people in your life.
          </p>
        </div>
        <div>
          <div className="shadow-lg p-6 rounded-xl space-y-6">
            <RegisterForm />
            <Or />
            <AuthButtons />
            <p className="text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-semibold">
                Login.
              </Link>{" "}
            </p>
          </div>
        </div>
      </Grid>
    </Container>
  );
};

export default page;
