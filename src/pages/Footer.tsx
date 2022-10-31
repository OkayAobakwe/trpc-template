import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";

const Logo = (props: any) => {
  return <div>Pokemon Fan App</div>;
};

export default function Footer() {
  return (
    <Box bg="white" color="gray">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />
        <Text>2022</Text>

        <Text align="right">PokeDex</Text>
      </Container>
    </Box>
  );
}
