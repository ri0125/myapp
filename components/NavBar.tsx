import { useState } from "react";
import {
  MdHomeFilled,
  MdOutlineMap,
  MdChatBubbleOutline,
  MdOutlineSearch,
} from "react-icons/md";
import { Flex, Text, Button, Icon, Avatar } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Flex
      direction={{ base: "row", md: "column" }}
      px={{ base: "16px", md: "12px" }}
      py={{ base: "11px", md: "12px" }}
      gap={{ base: "15px", md: "24px" }}
      w={{ base: "390px", md: "240px" }}
      h={{ base: "50px", md: "224px" }}
      boxShadow={{ base: "none", md: "base" }}
      borderRadius={{ base: "0", md: "12" }}
      alignItems={{ base: "center", md: "flex-start" }}
    >
      <Flex
        alignItems={"center"}
        w={{ base: "59.6px", md: "216px" }}
        h={{ base: "28px", md: "32px" }}
        gap={"16px"}
      >
        <Icon
          as={MdHomeFilled}
          color={"teal"}
          w={{ base: "24px", md: "32px" }}
          h={{ base: "24px", md: "32px" }}
          mx={{ base: "17.8px", md: "0" }}
          my={{ base: "2px", md: "0" }}
        />
        <Text
          display={{ base: "none", md: "block" }}
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="700"
          fontSize="18px"
          lineHeight="248x"
          letterSpacing={"-2.5%"}
          color={"#000000"}
        >
          홈
        </Text>
      </Flex>
      <Flex
        alignItems={"center"}
        w={{ base: "59.6px", md: "216px" }}
        h={{ base: "24px", md: "32px" }}
        gap={"16px"}
      >
        <Icon
          as={MdOutlineMap}
          w={"32px"}
          h={"32px"}
          display={{ base: "none", md: "block" }}
        />
        <Icon
          as={MdOutlineSearch}
          w={"24px"}
          h={"24px"}
          mx={"17.8px"}
          display={{ base: "block", md: "none" }}
        />
        <Text
          display={{ base: "none", md: "block" }}
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="700"
          fontSize="18px"
          lineHeight="28px"
          letterSpacing={"-2.5%"}
          color={"#000000"}
        >
          내 근처
        </Text>
      </Flex>
      <Flex
        alignItems={"center"}
        w={{ base: "59.6px", md: "216px" }}
        h={{ base: "24px", md: "32px" }}
        gap={"16px"}
      >
        <Icon
          as={MdChatBubbleOutline}
          w={"32px"}
          h={"32px"}
          display={{ base: "none", md: "block" }}
        />
        <Icon
          as={MdOutlineMap}
          w={"24px"}
          h={"24px"}
          mx={"17.8px"}
          display={{ base: "block", md: "none" }}
        />
        <Text
          display={{ base: "none", md: "block" }}
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="700"
          fontSize="18px"
          lineHeight="28px"
          letterSpacing={"-2.5%"}
          color={"#000000"}
        >
          채팅
        </Text>
      </Flex>
      <Flex
        alignItems={"center"}
        w={"59.6px"}
        h={"24px"}
        gap={"16px"}
        display={{ base: "flex", md: "none" }}
      >
        <Icon
          as={MdChatBubbleOutline}
          w={{ base: "24px", md: "32px" }}
          h={{ base: "24px", md: "32px" }}
          mx={{ base: "17.8px", md: "0" }}
        />
      </Flex>
      <Flex
        alignItems={"center"}
        w={"59.6px"}
        h={"24px"}
        gap={"16px"}
        display={{ base: "flex", md: "none" }}
      >
        <Avatar
          w={{ base: "24px", md: "32px" }}
          h={{ base: "24px", md: "32px" }}
          mx={{ base: "17.8px", md: "0" }}
        />
      </Flex>
      <Flex alignItems={"center"} w={"216px"} h={"32px"} gap={"16px"}>
        <Button
          display={{ base: "none", md: "flex" }}
          borderRadius={"12"}
          w={"100%"}
          h={"100%"}
          bg={"teal"}
          colorScheme="FFFFFF"
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="700"
          fontSize="18px"
          lineHeight="28px"
          letterSpacing={"-2.5%"}
          color={"#ffffff"}
        >
          + 글쓰기
        </Button>
      </Flex>
    </Flex>
  );
}
