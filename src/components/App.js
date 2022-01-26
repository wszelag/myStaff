import React from "react";
import { LandingPage } from "./LandingPage/LandingPage";
import { GlobalStyle } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <LandingPage />
    </>
  );
};
