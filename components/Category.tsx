import { useState } from "react";
import { Flex, Button, Text } from "@chakra-ui/react";

export default function Category() {
  const [activeButton, setActiveButton] = useState<number>(0);
  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <Flex
      px={"16px"}
      py={"8px"}
      maxW={{ base: "532px", md: "517px" }}
      maxH={"48px"}
      justifyContent={"space-between"}
      borderRadius={"12"}
      boxShadow={{ base: "", md: "base" }}
    >
      <Button
        display={"flex"}
        variant={"unstyled"}
        borderRadius={"12"}
        size={"sm"}
        px={"8px"}
        py={"4px"}
        onClick={() => handleButtonClick(1)}
        bg={activeButton == 1 ? "teal" : "none"}
      >
        <Text
          color={activeButton == 1 ? "#ffffff" : "#000000"}
          fontFamily={"Inter"}
          fontStyle={"normal"}
          fontWeight={"600"}
          fontSize={"14px"}
          lineHeight={"20px"}
          letterSpacing={"-2.5%"}
        >
          일상
        </Text>
      </Button>
      <Button
        display={"flex"}
        size={"sm"}
        variant={"unstyled"}
        borderRadius={"12"}
        h={"32px"}
        w={"68px"}
        px={"8px"}
        py={"4px"}
        onClick={() => handleButtonClick(2)}
        bg={activeButton == 2 ? "teal" : "none"}
      >
        <Text
          color={activeButton == 2 ? "#ffffff" : "#000000"}
          fontFamily={"Inter"}
          fontStyle={"normal"}
          fontWeight={"600"}
          fontSize={"14px"}
          lineHeight={"20px"}
          letterSpacing={"-2.5%"}
        >
          동네소식
        </Text>
      </Button>
      <Button
        display={"flex"}
        variant={"unstyled"}
        borderRadius={"12"}
        h={"32px"}
        w={"68px"}
        px={"8px"}
        py={"4px"}
        onClick={() => handleButtonClick(3)}
        bg={activeButton == 3 ? "teal" : "none"}
      >
        <Text
          color={activeButton == 3 ? "#ffffff" : "#000000"}
          fontFamily={"Inter"}
          fontStyle={"normal"}
          fontWeight={"600"}
          fontSize={"14px"}
          lineHeight={"20px"}
          letterSpacing={"-2.5%"}
        >
          중고거래
        </Text>
      </Button>
      <Button
        display={"flex"}
        variant={"unstyled"}
        borderRadius={"12"}
        h={"32px"}
        w={"68px"}
        px={"8px"}
        py={"4px"}
        onClick={() => handleButtonClick(4)}
        bg={activeButton == 4 ? "teal" : "none"}
      >
        <Text
          color={activeButton == 4 ? "#ffffff" : "#000000"}
          fontFamily={"Inter"}
          fontStyle={"normal"}
          fontWeight={"600"}
          fontSize={"14px"}
          lineHeight={"20px"}
          letterSpacing={"-2.5%"}
        >
          동네맛집
        </Text>
      </Button>
      <Button
        display={"flex"}
        variant={"unstyled"}
        borderRadius={"12"}
        h={"32px"}
        w={"46px"}
        px={"8px"}
        py={"4px"}
        onClick={() => handleButtonClick(5)}
        bg={activeButton == 5 ? "teal" : "none"}
      >
        <Text
          color={activeButton == 5 ? "#ffffff" : "#000000"}
          fontFamily={"Inter"}
          fontStyle={"normal"}
          fontWeight={"600"}
          fontSize={"14px"}
          lineHeight={"20px"}
          letterSpacing={"-2.5%"}
        >
          알바
        </Text>
      </Button>
      <Button
        display={"flex"}
        variant={"unstyled"}
        borderRadius={"12"}
        h={"32px"}
        w={"68px"}
        px={"8px"}
        py={"4px"}
        onClick={() => handleButtonClick(6)}
        bg={activeButton == 6 ? "teal" : "none"}
      >
        <Text
          color={activeButton == 6 ? "#ffffff" : "#000000"}
          fontFamily={"Inter"}
          fontStyle={"normal"}
          fontWeight={"600"}
          fontSize={"14px"}
          lineHeight={"20px"}
          letterSpacing={"-2.5%"}
        >
          같이해요
        </Text>
      </Button>
      <Button
        display={"flex"}
        variant={"unstyled"}
        borderRadius={"12"}
        h={"32px"}
        w={"46px"}
        px={"8px"}
        py={"4px"}
        onClick={() => handleButtonClick(7)}
        bg={activeButton == 7 ? "teal" : "none"}
      >
        <Text
          color={activeButton == 7 ? "#ffffff" : "#000000"}
          fontFamily={"Inter"}
          fontStyle={"normal"}
          fontWeight={"600"}
          fontSize={"14px"}
          lineHeight={"20px"}
          letterSpacing={"-2.5%"}
        >
          운동
        </Text>
      </Button>
      {/* <Button
        display={{ base: "block", md: "none" }}
        borderRadius={"12"}
        h={"32px"}
        w={"49px"}
        px={"8px"}
        py={"4px"}
        _hover={"none"}
        onClick={() => handleButtonClick(8)}
        bg={activeButton == 8 ? "teal" : "none"}
        fontFamily={"Inter"}
        fontStyle={"normal"}
        fontWeight={"600"}
        fontSize={"16px"}
        lineHeight={"24px"}
      >
        Tabs
      </Button>
      <Button
        display={{ base: "block", md: "none" }}
        borderRadius={"12"}
        h={"32px"}
        w={"49px"}
        px={"8px"}
        py={"4px"}
        _hover={"none"}
        onClick={() => handleButtonClick(9)}
        bg={activeButton == 9 ? "teal" : "none"}
        fontFamily={"Inter"}
        fontStyle={"normal"}
        fontWeight={"600"}
        fontSize={"16px"}
        lineHeight={"24px"}
      >
        Tabs
      </Button> */}
    </Flex>
  );
}
