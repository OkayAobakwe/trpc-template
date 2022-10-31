import styled from "styled-components";

export const Middle = styled.div`
  transition: 0.5s ease;
  opacity: 1;
  position: absolute;
  bottom: 25%;
  left: 36%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: left;
`;

export const BgImg = styled.img`
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
