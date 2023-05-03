import { MdOutlineMapsHomeWork, MdOutlineSearch } from "react-icons/md";
import { AiOutlineBell } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import {
  Flex,
  Button,
  Input,
  Icon,
  Avatar,
  useColorMode,
  Text,
} from "@chakra-ui/react";

export default function Header() {
  const { toggleColorMode } = useColorMode();
  return (
    <Flex
      maxW={{ base: "390px", md: "1150px" }}
      as="nav"
      mt={{ base: "44px", md: "0" }}
      px={{ base: "16px", md: "16px" }}
      pt={{ base: "4.5px", md: "5px" }}
      pb={{ base: "0", md: "5px" }}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Flex w={"135px"} h={"45px"} alignItems={"center"}>
        <Icon
          as={MdOutlineMapsHomeWork}
          display={{ base: "none", md: "block" }}
          w={"45px"}
          h={"45px"}
          color={"teal"}
        />
        <Button
          gap={"4px"}
          ml={{ base: "0", md: "20px" }}
          bg={"teal"}
          w={"70px"}
          h={"36px"}
          borderRadius={"12"}
          mb={{ base: "0", md: "6.5px" }}
          fontFamily={"Inter"}
          fontStyle={"normal"}
          fontWeight={"600"}
          fontSize={"16px"}
          lineHeight={"24px"}
          color={"#ffffff"}
          letterSpacing={"-2.5%"}
        >
          <Text>수원</Text>
          <Icon as={IoIosArrowDown} w={"20px"} h={"20px"} />
        </Button>
      </Flex>

      <Input
        display={{ base: "none", md: "block" }}
        w={"500px"}
        h={"32px"}
        fontFamily={"Inter"}
        fontStyle={"normal"}
        fontWeight={"600"}
        fontSize={"16px"}
        lineHeight={"24px"}
        color={"#000000"}
        letterSpacing={"-2.5%"}
        placeholder="교동 근처에서 검색"
        bg={"gray.200"}
        border={"0"}
        mx={"13px"}
      ></Input>
      <Flex alignItems={"center"}>
        <Icon
          as={AiOutlineBell}
          onClick={toggleColorMode}
          w={{ base: "18px", md: "19px" }}
          h={{ base: "21px", md: "22px" }}
          mr={{ base: "0", md: "20px" }}
        />
        <Avatar display={{ base: "none", md: "block" }} w={"35px"} h={"35px"} />
      </Flex>
    </Flex>
  );
}
