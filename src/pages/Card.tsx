import { Flex, Box, useColorModeValue, Button } from "@chakra-ui/react";
import styled from "styled-components";
import { useState } from "react";

//custom components with styled components
const Middle = styled.div`
  transition: 0.5s ease;
  opacity: 1;
  position: absolute;
  bottom: 25%;
  left: 36%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: left;
`;

const BgImg = styled.img`
  opacity: 1;
  display: block;
  border-radius: 10px;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;

  &:hover {
    filter: brightness(50%);
  }
`;

//End of custom components

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

  //   const colorHook = useColorModeValue("white", "gray.800");
  return (
    <>
      <Flex p={3} w="full" alignItems="center" justifyContent="center">
        <Box
          bg="gray"
          w="xl"
          border="none"
          borderWidth="1px"
          rounded="lg"
          shadow="xl"
          position="relative"
          key={1}
          h="xl"
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
