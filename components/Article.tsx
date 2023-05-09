import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Text,
  Image,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";

const Article = styled(Card)``;
const Header = styled(CardHeader)`
  display: flex;
  padding: 8px 16px 8px 16px;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
const ProfileIcon = styled(Avatar)`
  width: 40px;
  height: 40px;
  margin: 4px 0;
`;
const HeaderContainer = styled(Flex)`
  gap: 10px;
`;
const StatusBox = styled(Flex)`
  flex-direction: column;
`;
const UserName = styled(Text)`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -2.5%;
  color: #000000;
`;
const Time = styled(Text)`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -2.5%;
  color: #818181;
`;
const Main = styled(CardBody)`
  padding: 0;
`;
const MainContainer = styled(Flex)`
  flex-direction: column;
`;
const MainImg = styled(Image)`
  max-width: 100%;
  max-height: 188px;
  margin-bottom: 10px;
`;
const MainText = styled(Text)`
  max-width: 280px;
  margin-left: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -2.5%;
  color: #000000;
`;
const Footer = styled(CardFooter)`
  justify-content: right;
  flex-direction: column;
  padding: 0;
`;
const FooterContainer = styled(Flex)`
  padding: 8px 16px 12px 0;
  justify-content: flex-end;
`;
const IconBtn = styled(Icon)`
  width: 24px;
  height: 24px;
  padding: 0;
`;
const Count = styled(Text)``;
const FlexSpacer = styled(Spacer)``;

export default function article() {
  return (
    <Article
      maxW={{ base: "100%", md: "517px" }}
      maxH={{ base: "442", md: "396px" }}
    >
      <Header>
        <HeaderContainer>
          <ProfileIcon name="" />
          <StatusBox>
            <UserName>Chan Park</UserName>
            <Time>교동 . 1h</Time>
          </StatusBox>
        </HeaderContainer>
        <FlexSpacer />
        <IconBtn as={HiDotsHorizontal} />
      </Header>
      <Main maxW={{ base: "100%", md: "517px" }}>
        <MainContainer>
          <MainImg
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Image"
          />
          <MainText>
            벚꽃 구경할수 있는 공원 추천해주세요~!! 벚꽃 구경할수 있는 공원
            추천해주세요~!! 벚꽃 구경할수 있는 공원 추천해주세요~!!
          </MainText>
        </MainContainer>
      </Main>
      <Footer
        maxW={{ base: "100%", md: "517px" }}
        maxH={{ base: "44px", md: "48px" }}
      >
        <FooterContainer
          w={{ base: "100%", md: "517px" }}
          h={{ base: "44px", md: "48px" }}
        >
          <IconBtn as={AiOutlineHeart} />
          <Count>0</Count>
          <IconBtn as={BiMessage} />
          <Count>0</Count>
        </FooterContainer>
      </Footer>
    </Article>
  );
}
