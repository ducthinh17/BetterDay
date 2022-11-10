import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  useColorMode,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import Image from "next/image";
import SocialMediaBtns from "./SocialMediaBtns";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { CommonColors } from "./CommonColors";

export default function Header() {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();

  return (
    <Box pos="sticky" top="0" zIndex="999999999">
      <Flex
        bg={useColorModeValue(CommonColors.nav, CommonColors.nav_dark)}
        color={useColorModeValue("white", "white")}
        minH={"60px"}
        h="4rem"
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          align="center"
        >
          <Box>
            <Link href="/" fontSize="2.2rem" _hover={{ textDecor: "none" }}>
              BetterDay.
            </Link>
          </Box>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <ColorModeSwitcher />
          {/* <Button as={"a"} fontSize={"sm"} variant={"link"} href={"#"}>
            Sign In
          </Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"black"}
            href={"#"}
            _hover={{
              bg: "gray.500",
            }}
          >
            Sign Up
          </Button> */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("white", "white");
  const popoverContentBgColor = useColorModeValue(
    CommonColors.nav,
    CommonColors.nav_dark
  );

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"lg"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                mt={2}
                border={0}
                boxShadow={"lg"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  const subNavItemColor = useColorModeValue("white", "black");
  const subNavItemColorHover = useColorModeValue("#638291", "black");

  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{
        bg: subNavItemColorHover,
        color: useColorModeValue("white", "black"),
      }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: subNavItemColor }}
          >
            {label}
          </Text>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "black" }}
            fontSize={"sm"}
          >
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={subNavItemColor} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue(CommonColors.nav, CommonColors.nav_dark)}
      color="white"
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600}>{label}</Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("white", "white")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Câu chuyện",
  },
  {
    label: "Giải pháp",
    children: [
      {
        label: "Loại 1",
        // subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Loại 2",
        // subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Loại 3",
        // subLabel: "Find your dream design job",
        href: "#",
      },
    ],
  },
  {
    label: "Triệu chứng",
    children: [
      {
        label: "Tình yêu",
        // subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Gia đình",
        // subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Bản thân",
        // subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Công việc",
        // subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Học tập",
        // subLabel: "Find your dream design job",
        href: "#",
      },
    ],
  },
  {
    label: "Về chúng tôi",
  },
];
