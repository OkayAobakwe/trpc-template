import { trpc } from "../utils/trpc";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";

export default function IndexPage() {
  const hello = trpc.hello.useQuery({ text: "client" });
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <Flex
      align="center"
      justify="center"
      flexDirection="column"
      flex={1}
      bgColor="blue"
    >
      <Stack spacing={8} mx="auto" width="lg" paddingX={6}>
        <Box rounded="xl" bg="white" boxShadow="lg" padding={8}>
          <Text color="black">Welcome to the trpc template</Text>
        </Box>
      </Stack>
    </Flex>
  );
}
