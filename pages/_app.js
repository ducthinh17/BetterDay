import {
  Box,
  ChakraProvider,
  extendTheme,
  useColorModeValue,
} from "@chakra-ui/react";
import { CommonColors } from "../components/CommonColors";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";
import Header from "../components/Header";
import SEO from "../components/SEO";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const customTheme = extendTheme({
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      "2xl": "1536px",
    },
    components: {
      Steps,
    },
  });
  return (
    <ChakraProvider theme={customTheme}>
      <SEO />
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
