// import {
//   Flex,
//   Box,
//   useColorModeValue,
//   Button,
//   Link,
//   Image,
//   GridItem,
//   Grid,
// } from "@chakra-ui/react";
// import { useState, useContext } from "react";
// import { Middle, BgImg } from "../styles/cardstyles";
import { trpc } from "../utils/trpc";
// import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

// const data = {
//   isNew: true,
//   imageURL: "",
//   name: "Dummy Data AB",
//   price: 4.5,
//   rating: 4.2,
//   numReviews: 34,
//   id: 1,
// };

// function LeftArrow() {
//   const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

//   return (
//     <button disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
//       {"<"}
//     </button>
//   );
// }

// function RightArrow() {
//   const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

//   return (
//     <button disabled={isLastItemVisible} onClick={() => scrollNext()}>
//       {">"}
//     </button>
//   );
// }

// function Card() {
//   const [isUsers, setUsers] = useState([]);

const pokemon = trpc.pokemons.useQuery();

//   return (
//     <>
//       <Grid templateColumns="repeat(5, 1fr)" gap={6}>
//         <GridItem w="100%" h="xl">
//           <Flex
//             p={3}
//             w="full"
//             alignItems="center"
//             justifyContent="center"
//             overflow="auto"
//           >
//             <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
//               {pokemon.data?.pokemonList?.map((pokemon) => (
//                 <Box
//                   bg="white"
//                   w="sm"
//                   border="none"
//                   borderWidth="1px"
//                   rounded="lg"
//                   shadow="2xl"
//                   position="relative"
//                   key={1}
//                   h="sm" // changed height to small
//                 >
//                   <Link href={`/pokemon/${pokemon.name}`} key={pokemon.url}>
//                     <BgImg
//                       src="" //INSERT IMAGE FROM API
//                       alt={`Picture of`} // INSERT ALT IMAGE TEXT FROM API
//                       style={{ width: "100%" }}
//                     />

//                     <Middle>
//                       <Flex
//                         mt="1"
//                         justifyContent="space-between"
//                         alignContent="center"
//                       >
//                         <Box
//                           fontSize="2xl"
//                           fontWeight="semibold"
//                           as="h4"
//                           lineHeight="tight"
//                           style={{ color: "#000" }}
//                           alignItems={"left"}
//                         >
//                           <Image
//                             src={pokemon.sprites}
//                             alt="poke"
//                             width={100}
//                             height={100}
//                           />
//                           {pokemon.name}
//                         </Box>
//                       </Flex>
//                     </Middle>
//                   </Link>
//                 </Box>
//               ))}
//             </ScrollMenu>
//           </Flex>
//         </GridItem>
//       </Grid>
//     </>
//   );
// }

// export default Card;

import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function Card() {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {pokemon.data?.pokemonList?.map((pokemon) => (
        <CardStuff
          itemId={pokemon.id} // NOTE: itemId is required for track items
          title={pokemon.name}
          key={pokemon.id}
          onClick={handleClick(pokemon.id)}
          selected={isItemSelected(pokemon.id)}
        />
      ))}
    </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <button disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </button>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <button disabled={isLastItemVisible} onClick={() => scrollNext()}>
      Right
    </button>
  );
}

function CardStuff({ onClick, selected, title, itemId }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: "160px",
      }}
      tabIndex={0}
    >
      <div className="card">
        <div>{title}</div>
        <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: "200px",
        }}
      />
    </div>
  );
}

export default Card;
