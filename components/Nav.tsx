import { useState } from "react";
import { Flex, Button, Text, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Nav = styled(Flex)`
  margin-top: 40px;
  align-items: center;
  padding: 8px 16px 8px 16px;
  max-height: 48px;
  border-radius: 12px;
  background-color: #ffffff;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Btn = styled(Button)`
  min-width: auto;
  display: flex;
  padding: 4px 8px 4px 8px;
  border-radius: 12px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -2.5%;
`;

export default function nav() {
  const [activeButton, setActiveButton] = useState<number>(0);
  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <Nav
      maxW={{ base: "390px", md: "517px" }}
      boxShadow={{ base: "none", md: "base" }}
      overflow={"scroll"}
      gap={{ base: "0", md: "13.84px" }}
    >
      <Btn
        w={"46px"}
        h={"32px"}
        variant={"unstyled"}
        onClick={() => handleButtonClick(1)}
        bg={activeButton == 1 ? "teal" : "none"}
        color={activeButton == 1 ? "#ffffff" : "#000000"}
      >
        일상
      </Btn>
      <Btn
        w={"68px"}
        h={"32px"}
        variant={"unstyled"}
        onClick={() => handleButtonClick(2)}
        bg={activeButton == 2 ? "teal" : "none"}
        color={activeButton == 2 ? "#ffffff" : "#000000"}
      >
        동네소식
      </Btn>
      <Btn
        w={"68px"}
        h={"32px"}
        variant={"unstyled"}
        onClick={() => handleButtonClick(3)}
        bg={activeButton == 3 ? "teal" : "none"}
        color={activeButton == 3 ? "#ffffff" : "#000000"}
      >
        중고거래
      </Btn>
      <Btn
        w={"68px"}
        h={"32px"}
        variant={"unstyled"}
        onClick={() => handleButtonClick(4)}
        bg={activeButton == 4 ? "teal" : "none"}
        color={activeButton == 4 ? "#ffffff" : "#000000"}
      >
        동네맛집
      </Btn>
      <Btn
        w={"46px"}
        h={"32px"}
        variant={"unstyled"}
        onClick={() => handleButtonClick(5)}
        bg={activeButton == 5 ? "teal" : "none"}
        color={activeButton == 5 ? "#ffffff" : "#000000"}
      >
        알바
      </Btn>
      <Btn
        w={"68px"}
        h={"32px"}
        variant={"unstyled"}
        onClick={() => handleButtonClick(6)}
        bg={activeButton == 6 ? "teal" : "none"}
        color={activeButton == 6 ? "#ffffff" : "#000000"}
      >
        같이해요
      </Btn>
      <Btn
        w={"46px"}
        h={"32px"}
        variant={"unstyled"}
        onClick={() => handleButtonClick(7)}
        bg={activeButton == 7 ? "teal" : "none"}
        color={activeButton == 7 ? "#ffffff" : "#000000"}
      >
        운동
      </Btn>
      <Btn
        display={{ base: "block", md: "none" }}
        h={"32px"}
        w={"49px"}
        onClick={() => handleButtonClick(8)}
        bg={activeButton == 8 ? "teal" : "none"}
      >
        Tabs
      </Btn>
      <Btn
        display={{ base: "block", md: "none" }}
        h={"32px"}
        w={"49px"}
        onClick={() => handleButtonClick(9)}
        bg={activeButton == 9 ? "teal" : "none"}
      >
        Tabs
      </Btn>
    </Nav>
  );
}
