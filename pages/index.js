import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Link,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Header from "../components/Header";
import { CommonColors } from "../components/CommonColors";
import blob from "../public/blob.svg";
import blob_dark from "../public/blob_dark.svg";
import Story from "../components/Story";

export default function Home() {
  return (
    <>
      <Box h="100vh">
        <Hero />
        <Box
          w="full"
          h="min-content"
          bgColor={useColorModeValue(CommonColors.bg, "orange")}
        >
          <Image
            src={useColorModeValue(blob.src, blob_dark.src)}
            w="100vw"
            h="auto"
            objectFit="cover"
            alt="blob"
          />
        </Box>
        <Box
          w="full"
          h="full"
          bgColor={useColorModeValue(CommonColors.blob, CommonColors.blob)}
        >
          <Story />
        </Box>
      </Box>
    </>
  );
}
