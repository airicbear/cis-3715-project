import { NextPage } from "next";
import Head from "next/head";
import { Container, Heading } from "@chakra-ui/react";
import UserInput from "../components/UserInput";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hand Written Digit Recognizer</title>
      </Head>

      <Container>
        <Heading>Digit Recognizer</Heading>
        <UserInput />
      </Container>
    </>
  );
};

export default Home;
