import { trpc } from "../utils/trpc";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function IndexPage() {
  const hello = trpc.hello.useQuery({ text: "client" });
  const pokemon = trpc.pokemons.useQuery();
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {pokemon.data?.pokemonList?.map((pokemon) => (
        <Link href={`/pokemon/${pokemon.name}`} key={pokemon.url}>
          <Box>
            <Text>{pokemon.name}</Text>
          </Box>
        </Link>
      ))}
    </>
  );
}
