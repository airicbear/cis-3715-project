import { NextPage } from "next";
import Head from "next/head";
import { Container, Heading, Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hand Written Digit Recognizer</title>
      </Head>

      <Container>
        <Heading>Digit Recognizer</Heading>
        <Text fontSize='6xl' ></Text>
      </Container>
    </>
  );
};

export default Home;
