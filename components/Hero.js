import React from "react";
import {
  Heading,
  Center,
  Button,
  VStack,
  Text,
  SimpleGrid,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";
import { useDisclosure } from "@chakra-ui/react";
import Newsletter from "./Newsletter";
import HeroTextBox from "./HeroTexBox";
import { CommonColors } from "./CommonColors";
import { motion, useScroll } from "framer-motion";

const features = [
  {
    icon: "https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-depression-cbd-oil-flaticons-flat-flat-icons.png",
    content:
      "Our online self-help program is personalized and developed by doctors based on scientific studies",
  },
  {
    icon: "https://img.icons8.com/stickers/344/tarot-cards.png",
    content:
      "We are online 7 days a week, 24 hours a day. You do not have to make an appointment. There are no waiting times. You log in when it suits you.",
  },
  {
    icon: "https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-depression-isolation-flaticons-flat-flat-icons.png",
    content:
      "You help yourself from your seat at home, easily and quickly. So you save yourself from tiring journeys!",
  },
  {
    icon: "https://img.icons8.com/color/344/headache.png",
    content:
      "You can complete the program on your own or you can ask a friend or family member to assist you so they can help you.",
  },
];

export default function Hero() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const titlesAnimation = {
    hidden: { opacity: 0, y: "-50px" },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <Box
        h="85vh"
        bgColor={useColorModeValue(CommonColors.bg, CommonColors.bg_dark)}
      >
        <Center h="full">
          <VStack
            spacing="3rem"
            py="3rem"
            align="center"
            textAlign="center"
            w="full"
            color={useColorModeValue("black", "white")}
          >
            <Box px="1rem">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 1 }}
              >
                <Text
                  px="1rem"
                  fontSize={{ sm: "3rem", md: "5rem", lg: "6rem" }}
                >
                  It is OK not to be OK.
                </Text>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 1.4 }}
              >
                <Text
                  px="1rem"
                  fontSize={{ sm: "1.2rem", md: "1.5rem", lg: "2rem" }}
                >
                  Start the test to know what type of depression you are in.
                </Text>
              </motion.div>
            </Box>
            {/* action button */}
            <Link href="/test" _hover={{ textDecor: "none" }}>
              <Button
                variant="outline"
                w="12rem"
                onClick={onOpen}
                border="1px"
                borderColor="black"
                color="black"
                bgColor="white"
              >
                <Text fontSize="1.2rem">START THE TEST</Text>
              </Button>
            </Link>
          </VStack>
        </Center>
      </Box>
    </>
  );
}
