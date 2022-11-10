import React from "react";
import {
  Box,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Button,
  Show,
  Hide,
  Link,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon, AtSignIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Image from "next/image";
import { useDisclosure } from "@chakra-ui/react";

const menuTitles = [
  { name: "About us", link: "#", isMenu: false },
  { name: "Recommendations", link: "#", isMenu: true },
  { name: "References", link: "#", isMenu: false },
  { name: "Symptoms", link: "#", isMenu: true },
];

export default function HeaderItems() {
  return (
    <>
      {menuTitles.map(({ name, link, isMenu }, index) => (
        <Box key={index} py="1rem">
          {isMenu ? (
            <Menu>
              <MenuButton
                variant="ghost"
                as={Button}
                leftIcon={<ChevronDownIcon />}
                borderColor="none"
              >
                {name}
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Box as={Button} variant="ghost">
              <NextLink href={link}>{name}</NextLink>
            </Box>
          )}
        </Box>
      ))}
    </>
  );
}
