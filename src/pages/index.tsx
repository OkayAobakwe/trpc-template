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
      <Card />
    </>
  );
}
