import React from "react";
import { Header } from "./Header";
import { Statistics } from "./Statistics/Statistics";
import { Steps } from "./Steps/Steps";
import { StepsTitle } from "./Steps/StepsTitle";
import { Button } from "./Button/Button";
import { About } from "./About/About";
import { WhoHelp } from "./WhoHelp/WhoHelp";

export function Home() {
  return (
    <>
      <Header />
      <Statistics />
      <StepsTitle />
      <Steps />
      <Button />
      <About />
      <WhoHelp />
    </>
  );
}
