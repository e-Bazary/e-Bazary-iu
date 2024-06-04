import { Button, Html } from "@react-email/components";
import * as React from "react";

type WelcomeProps = {
  firstname: string;
};

export const Welcome = ({ firstname }: WelcomeProps) => {
  return (
    <Html>
      <h1>Welcome, {firstname}!</h1>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
    </Html>
  );
};

export default Welcome;
