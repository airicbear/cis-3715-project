import { NextPage } from "next";
import Head from "next/head";
import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import ImageDrawer from "../components/ImageDrawer";
import Header from "../components/Heading";
import Prediction from "../components/Prediction";
import Button_ from "../components/Button";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hand Written Digit Recognizer</title>
      </Head>

      <Container bgGradient='linear(orange.100 0%, pink.100 40%, purple.200 70%)' maxW='100%' height={900} centerContent> 
        <Header></Header>
        <ImageDrawer></ImageDrawer>
        <Prediction></Prediction>
        <Button_></Button_>
      </Container>
    </>
  );
};

export default Home;
