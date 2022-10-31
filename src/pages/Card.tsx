import { Flex, Box, useColorModeValue, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Middle, BgImg } from "../styles/cardstyles";

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

  return (
    <>
      <Flex p={3} w="full" alignItems="center" justifyContent="center">
        <Box
          bg="gray"
          w="md"
          border="none"
          borderWidth="1px"
          rounded="lg"
          shadow="xl"
          position="relative"
          key={1}
          h="md"
        >
          <BgImg
            key={1} //INSERT ID FROM API
            src="" //INSERT IMAGE FROM API
            alt={`Picture of`} // INSERT ALT IMAGE TEXT FROM API
            style={{ width: "100%" }}
          />

          <Middle>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                style={{ color: "#000" }}
                alignItems={"left"}
              >
                INSERT NAME AB
              </Box>
            </Flex>
          </Middle>
        </Box>
      </Flex>
    </>
  );
}

export default Card;
