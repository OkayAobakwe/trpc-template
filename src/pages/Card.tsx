import { Flex, Box, Link, Image, GridItem, Grid } from "@chakra-ui/react";
import { useState } from "react";
import { Middle, BgImg } from "../styles/cardstyles";
import { trpc } from "../utils/trpc";

const data = {
  isNew: true,
  imageURL: "",
  name: "Dummy Data AB",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
  id: 1,
};

function Card() {
  const [isUsers, setUsers] = useState([]);

  const pokemon = trpc.pokemons.useQuery();

  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" h="xl">
          <Flex
            p={3}
            w="full"
            alignItems="center"
            justifyContent="center"
            overflow="auto"
          >
            {pokemon.data?.pokemonList?.map((pokemon) => (
              <Box
                bg="white"
                w="sm"
                border="none"
                borderWidth="1px"
                rounded="lg"
                shadow="2xl"
                position="relative"
                key={1}
                h="sm" // changed height to small
              >
                <Link href={`/pokemon/${pokemon.name}`} key={pokemon.url}>
                  <BgImg
                    src="" //INSERT IMAGE FROM API
                    alt={`Picture of`} // INSERT ALT IMAGE TEXT FROM API
                    style={{ width: "100%" }}
                  />

                  <Middle>
                    <Flex
                      mt="1"
                      justifyContent="space-between"
                      alignContent="center"
                    >
                      <Box
                        fontSize="2xl"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        style={{ color: "#000" }}
                        alignItems={"left"}
                      >
                        <Image
                          src={pokemon.sprites}
                          alt="poke"
                          width={100}
                          height={100}
                        />
                        {pokemon.name}
                      </Box>
                    </Flex>
                  </Middle>
                </Link>
              </Box>
            ))}
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
}

export default Card;
