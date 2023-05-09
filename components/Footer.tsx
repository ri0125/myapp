import {
  MdHomeFilled,
  MdOutlineMap,
  MdChatBubbleOutline,
  MdOutlineSearch,
} from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { Flex, Button, Icon } from "@chakra-ui/react";
import Link from "next/link";
import styled from "@emotion/styled";

const Footer = styled(Flex)`
  width: 100%;
  position: fixed;
  bottom: 0;
`;
const Nav = styled(Flex)`
  align-items: center;
  width: 100%;
  padding: 11px 16px 11px 16px;
  gap: 15px;
  background-color: #ffffff;
`;
const LinkBtn = styled(Button)`
  align-items: center;
  width: 59.6px;
  height: 28px;
  gap: 16px;
`;
const BtnIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  margin: 0px 17.8px;
`;

export default function footer() {
  return (
    <Footer display={{ base: "flex", md: "none" }}>
      <Nav>
        <Link href="/home">
          <LinkBtn variant={"unstyled"}>
            <BtnIcon as={MdHomeFilled} color={"teal"} />
          </LinkBtn>
        </Link>
        <Link href="/search">
          <LinkBtn variant={"unstyled"}>
            <BtnIcon as={MdOutlineSearch} color={"#000000"} />
          </LinkBtn>
        </Link>
        <Link href="/map">
          <LinkBtn variant={"unstyled"}>
            <BtnIcon as={MdOutlineMap} color={"#000000"} />
          </LinkBtn>
        </Link>
        <Link href="/chat">
          <LinkBtn variant={"unstyled"}>
            <BtnIcon as={MdChatBubbleOutline} color={"#000000"} />
          </LinkBtn>
        </Link>
        <Link href="/profile">
          <LinkBtn variant={"unstyled"}>
            <BtnIcon as={RxAvatar} color={"#000000"} />
          </LinkBtn>
        </Link>
      </Nav>
    </Footer>
  );
}
