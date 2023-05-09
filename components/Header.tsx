import { MdOutlineMapsHomeWork, MdOutlineSearch } from "react-icons/md";
import { AiOutlineBell } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import {
  Flex,
  Button,
  Input,
  Icon,
  Avatar,
  useColorMode,
} from "@chakra-ui/react";

const Header = styled(Flex)`
  position: fixed;
  z-index: 9999;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 16px;
  background-color: #ffffff;
`;
const Nav = styled(Flex)`
  align-items: center;
`;
const OurtownLogo = styled(Icon)`
  width: 45px;
  height: 45px;
  color: teal;
`;
const SearchInput = styled(Input)`
  width: 500px;
  height: 32px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -2.5%;
  color: #000000;
  background-color: #e5e5e5;
  border: 0;
  border-radius: 12px;
  margin: 0 13px;
`;
const LocationBtn = styled(Button)`
  width: 70px;
  height: 36px;
  gap: 4px;
  background-color: teal;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -2.5%;
  color: #ffffff;
  border-radius: 12px;
`;
const ArrowDownIcon = styled(Icon)`
  width: 20px;
  height: 20px;
`;
const AlramIcon = styled(Icon)`
  width: 18px;
  height: 21px;
  margin-right: 0;
`;
const MyAvatar = styled(Avatar)`
  width: 35px;
  height: 35px;
`;
export default function header() {
  const { toggleColorMode } = useColorMode();
  return (
    <Header
      maxW={{ base: "390px", md: "1150px" }}
      py={{ base: "4.5px", md: "5px" }}
      h={{ base: "41px" }}
    >
      <Nav>
        <OurtownLogo
          as={MdOutlineMapsHomeWork}
          display={{ base: "none", md: "block" }}
        />
        <LocationBtn
          ml={{ base: "0", md: "20px" }}
          mb={{ base: "0", md: "6.5px" }}
        >
          수원
          <ArrowDownIcon as={IoIosArrowDown} />
        </LocationBtn>
      </Nav>
      <Nav>
        <SearchInput
          placeholder="교동 근처에서 검색"
          display={{ base: "none", md: "block" }}
        />
      </Nav>
      <Nav>
        <AlramIcon
          as={AiOutlineBell}
          onClick={toggleColorMode}
          w={{ base: "18px", md: "19px" }}
          h={{ base: "21px", md: "22px" }}
          mr={{ base: "0", md: "20px" }}
        />
        <MyAvatar display={{ base: "none", md: "block" }} />
      </Nav>
    </Header>
  );
}
