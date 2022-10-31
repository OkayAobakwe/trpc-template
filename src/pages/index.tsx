import { trpc } from "../utils/trpc";
import {
  Box,
  Flex,
  Stack,
  Text,
  Center,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Link from "next/link";
import Card from "./Card";
import { useMediaQuery } from "react-responsive";
import Navbar from "./Navbar";

export default function IndexPage() {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  const hello = trpc.hello.useQuery({ text: "client" });
  const pokemon = trpc.pokemons.useQuery();
  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Navbar />
      <Text align="center" fontSize="xl" mt={10}>
        {" "}
        Welcome to the world of Pokemon{" "}
      </Text>
      <Text align="center" fontSize="md">
        We are just fans making a page{" "}
      </Text>
      <Box style={{ marginLeft: isMobile ? "1%" : "5%" }}>
        <Wrap>
          <WrapItem>
            <Center>
              <Card />
            </Center>
          </WrapItem>
        </Wrap>
      </Box>
    </Box>
  );
}
