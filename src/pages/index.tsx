import { trpc } from "../utils/trpc";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Card from "./Card";

export default function IndexPage() {
  const hello = trpc.hello.useQuery({ text: "client" });
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Text align="center" fontSize="xl" mt={10}>
        {" "}
        Welcome to the world of Pokemon{" "}
      </Text>
      <Text align="center" fontSize="md">
        We are just fans making a page{" "}
      </Text>
      <Card />
    </>
  );
}
