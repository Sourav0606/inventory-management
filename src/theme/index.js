import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  heading: "Poppins",
  body: "Poppins",
};

const theme = extendTheme({
  config,
  fonts,
});

export default theme;
