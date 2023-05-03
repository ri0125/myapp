/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper";
import {
  Avatar,
  Heading,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Text,
  IconButton,
  Image,
  Button,
  Icon,
  Input,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";

export default function Post() {
  const [count1, setCount1] = useState<boolean>(false);
  const onClick1 = () => {
    setCount1(!count1);
  };
  const [count2, setCount2] = useState<boolean>(false);
  const onClick2 = () => {
    setCount2(!count2);
  };
  return (
    <Card
      maxW={{ base: "390px", md: "517px" }}
      maxH={{ base: "442px", md: "396px" }}
    >
      <CardHeader p={"0"}>
        <Flex
          py={"8px"}
          pl={"16px"}
          pr={"20px"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Flex justifyContent={"center"} alignItems={"center"} gap={"10px"}>
            <Avatar name="" w={"40px"} h={"40px"} my={"4px"} />
            <Box>
              <Text
                fontFamily={"Inter"}
                fontStyle={"normal"}
                fontWeight={"600"}
                fontSize={"16px"}
                lineHeight={"24px"}
                color={"#000000"}
                letterSpacing={"-2.5%"}
              >
                Chan Park
              </Text>
              <Text
                fontFamily={"Inter"}
                fontStyle={"normal"}
                fontWeight={"400"}
                fontSize={"16px"}
                lineHeight={"24px"}
                color={"#818181"}
                letterSpacing={"-2.5%"}
              >
                교동 . 1h
              </Text>
            </Box>
          </Flex>
          <IconButton
            size={"xs"}
            variant={"unstyled"}
            Icon
            as={HiDotsHorizontal}
          />
        </Flex>
      </CardHeader>
      <CardBody maxW={{ base: "390px", md: "517px" }} maxH={"284px"} p={"0"}>
        <Image
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Chakra UI"
          mb={"8px"}
          maxH={"180px"}
        />
        <Text
          maxW={"280px"}
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="400"
          fontSize="16px"
          lineHeight="24px"
          letterSpacing={"-2.5%"}
          color={"#000000"}
        >
          벚꽃 구경할수 있는 공원 추천해주세요~!! 벚꽃 구경할수 있는 공원
          추천해주세요~!! 벚꽃 구경할수 있는 공원 추천해주세요~!!
        </Text>
      </CardBody>
      <CardFooter
        maxW={{ base: "390px", md: "517px" }}
        h={{ base: "44px", md: "48px" }}
        justifyContent={"right"}
        flexDirection={"column"}
        p={"0"}
      >
        <Flex
          w={{ base: "390px", md: "517px" }}
          h={{ base: "44px", md: "48px" }}
          pt={"8px"}
          pr={"16px"}
          pb={{ base: "12px", md: "16px" }}
          justifyContent={"flex-end"}
          gap={"4px"}
        >
          <IconButton
            size={"xs"}
            onClick={onClick1}
            p={"0"}
            icon
            as={AiOutlineHeart}
            variant={"unstyled"}
          />
          <Text>{count1 ? 1 : 0}</Text>
          <IconButton
            size={"xs"}
            onClick={onClick2}
            p={"0"}
            Icon
            as={BiMessage}
            variant={"unstyled"}
          />
          <Text>{count2 ? 1 : 0}</Text>
        </Flex>
      </CardFooter>
    </Card>
  );
}
