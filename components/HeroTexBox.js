import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export default function HeroTextBox({ children }) {
  return (
    <>
      <Box
        w="full"
        h="full"
        p="2rem"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
        bgColor="#f2f2f2"
        color="black"
        rounded="lg"
      >
        <Text>{children}</Text>
      </Box>
    </>
  );
}
