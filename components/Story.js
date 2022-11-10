import { SimpleGrid } from "@chakra-ui/react";
import HeroTextBox from "./HeroTexBox";

export default function Story() {
  return (
    <>
      <SimpleGrid
        columns={{ md: 1, lg: 2 }}
        spacing="3rem"
        w="100%"
        color="black"
        px="10vw"
        py="5vh"
        justifyItems="center"
      >
        <HeroTextBox>
          Depression is a common illness worldwide, with an estimated 3.8% of
          the population affected, especially in South-East Asia region with the
          highest percentage of depression.
        </HeroTextBox>
        <HeroTextBox>
          Based on one of the 5 factors that pressure you the most, our test
          will help you determine which stage of depression you are in.
        </HeroTextBox>
      </SimpleGrid>
    </>
  );
}
