import React from "react";
import { Header } from "./Header";
import { Statistics } from "./Statistics/Statistics";
import { Steps } from "./Steps/Steps";
import { StepsTitle } from "./Steps/StepsTitle";
import { Button } from "./Button/Button";
import { About } from "./About/About";
import { WhoHelp } from "./WhoHelp/WhoHelp";
import { Navbar } from "../Navbar/Navbar";
import { Contact } from "../Contact/Contact";
import { Footer } from "../Footer/Footer";

export function Home({ setUser, user }) {
  return (
    <>
      <Navbar setUser={setUser} user={user} />
      <Header />
      <Statistics />
      <StepsTitle />
      <Steps />
      <Button />
      <About />
      <WhoHelp />
      <Contact />
      <Footer />
    </>
  );
}
