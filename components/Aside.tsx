import {
  MdHomeFilled,
  MdOutlineMap,
  MdChatBubbleOutline,
  MdOutlineSearch,
} from "react-icons/md";
import { Flex, Text, Button, Icon, Avatar } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";

const Aside = styled(Flex)`
  position: fixed;
  margin-top: 40px;
`;
const Nav = styled(Flex)`
  flex-direction: column;
  padding: 12px 12px 12px 12px;
  gap: 24px;
  width: 240px;
  height: 224px;
  border-radius: 12px;
  align-items: flex-start;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
`;
const LinkBtn = styled(Button)`
  justify-content: start;
  width: 216px;
  height: 32px;
  gap: 16px;
  padding: 0;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -2.5%;
`;
const HomeIcon = styled(Icon)`
  color: teal;
  width: 32px;
  height: 32px;
  margin: 0;
`;
const MapIcon = styled(Icon)`
  color: #000000;
  width: 32px;
  height: 32px;
  margin: 0;
`;
const ChatIcon = styled(Icon)`
  color: #000000;
  width: 32px;
  height: 32px;
  margin: 0;
`;
const WriteBtn = styled(Button)`
  width: 216px;
  height: 32px;
  gap: 16px;
  padding: 0;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -2.5%;
  background-color: teal;
  color: #ffffff;
`;

export default function aside() {
  return (
    <Aside display={{ base: "none", md: "flex" }}>
      <Nav>
        <Link href="/home">
          <LinkBtn variant={"ghost"}>
            <HomeIcon as={MdHomeFilled} />홈
          </LinkBtn>
        </Link>
        <Link href="/map">
          <LinkBtn variant={"ghost"}>
            <MapIcon as={MdOutlineMap} />내 근처
          </LinkBtn>
        </Link>
        <Link href="/chatting">
          <LinkBtn variant={"ghost"}>
            <ChatIcon as={MdChatBubbleOutline} />
            채팅
          </LinkBtn>
        </Link>
        <WriteBtn>+ 글쓰기</WriteBtn>
      </Nav>
    </Aside>
  );
}
