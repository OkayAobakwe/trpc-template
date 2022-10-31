import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Link,
    Image,
  } from '@chakra-ui/react';
import { trpc } from "../utils/trpc";
  
export default function CardNew() {

    const pokemon = trpc.pokemons.useQuery();

    return (
      <Box py={12}>
        {pokemon.data?.pokemonList?.map((pokemon) => (
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
             <Link href={`/pokemon/${pokemon.name}`} key={pokemon.url}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: ,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={pokemon.sprites}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {pokemon.name}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {pokemon.url}
            </Heading>
            
          </Stack>
          </Link>

        </Box>
        ))}
      </Box>
    );
  }