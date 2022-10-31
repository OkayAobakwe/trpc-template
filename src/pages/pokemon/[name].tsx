import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

export default function Pokemon() {
  const router = useRouter();
  const pokemon = trpc.pokemon.useQuery({ name: router.query.name as string });

  return (
    <Flex justifyContent="center">
      <Box>
        <Text>{pokemon.data?.pokemon.name}</Text>
        <Image
          src={pokemon.data?.pokemon.sprites.front_default}
          alt="poke"
          width={100}
          height={100}
        />
      </Box>
    </Flex>
  );
}
