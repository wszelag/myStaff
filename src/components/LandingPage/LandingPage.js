import React from "react";
import { LoginForm } from "./LoginForm/LoginForm";
import { Wrapper, Background } from "./LandingPage.css";

export const LandingPage = () => {
  return (
    <>
      <Background />
      <Wrapper>
        <LoginForm />
      </Wrapper>
    </>
  );
};
