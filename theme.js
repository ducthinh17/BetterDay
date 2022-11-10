import {} from "@chakra-ui/theme-tools";

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  colors: {
    primary: "#19750A",
    secondary: "#BB1313",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "none",
        background: "none",
      },
      sizes: {
        small: {
          px: 5,
          h: "50px",
          fontSize: "20px",
        },
        medium: {
          px: 7,
          h: "60px",
          fontSize: "25px",
        },
        large: {
          px: 8,
          h: "70px",
          fontSize: "30px",
        },
      },
      variants: {
        primary: {
          bg: "primary",
          color: "#fff",
        },
        secondary: {
          bg: "secondary",
          color: "#fff",
        },
        ghost: {
          bg: "transparent",
          border: "1px solid red",
        },
        primaryGhost: {
          bg: "transparent",
          border: "1px solid",
          borderColor: "primary",
        },
        secondaryGhost: {
          bg: "transparent",
          border: "1px solid",
          borderColor: "secondary",
          _hover: {
            color: "#fff",
            bg: "#BB1415",
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "Inter",
        fontWeight: "600",
      },
      sizes: {
        small: {
          fontSize: "20px",
        },
        medium: { fontSize: "25px" },
        large: { fontSize: "30px" },
      },
    },
  },
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme(config);

export default theme;
