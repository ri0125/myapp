import { Formik, Field } from "formik";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  VStack,
  Icon,
  Text,
  Link,
  Box,
} from "@chakra-ui/react";
import Router from "next/router";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { css } from "@emotion/react";

export default function Login() {
  return (
    <Flex bg="#ffffff" align="center" justify="center" h="100vh">
      <Flex
        bg="white"
        w={{ base: "390px", md: "616px" }}
        h={{ base: "468px", md: "240px" }}
        direction={{ base: "column", md: "row" }}
        align={"center"}
        justify={"start"}
        gap={"30px"}
      >
        <Flex align={"center"} direction={"column"}>
          <Icon
            as={MdOutlineMapsHomeWork}
            color={"teal"}
            w={{ base: "120px", md: "170px" }}
            h={{ base: "120px", md: "170px" }}
          />
          <Text
            //w=196
            w={"216px"}
            h={"48px"}
            fontFamily={"Inter"}
            fontStyle={"normal"}
            fontWeight={"600"}
            fontSize={"16px"}
            lineHeight={"24px"}
            letterSpacing={"-2.5%"}
            color={"#000000"}
            mt={{ base: "30px", md: "10px" }}
          >
            동네이야기부터 중고거래까지 가까운 이웃과 함께해요
          </Text>
        </Flex>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={() => {
            Router.push("/home");
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack align="center" w={"358px"}>
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <Field
                    as={Input}
                    h={"32px"}
                    pr={"0"}
                    border={0}
                    borderRadius={"12"}
                    placeholder="이메일"
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    fontFamily="Inter"
                    fontStyle="normal"
                    fontWeight="600"
                    fontSize="14px"
                    lineHeight="20px"
                    color="#818181"
                    validate={(value: String) => {
                      let error;
                      if (value.length < 6) {
                        error = "비밀번호를 입력하세요";
                      }
                      return error;
                    }}
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <Field
                    as={Input}
                    h={"32px"}
                    pr={"0"}
                    border={0}
                    borderRadius={"12"}
                    placeholder="비밀번호"
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    fontFamily="Inter"
                    fontStyle="normal"
                    fontWeight="600"
                    fontSize="16px"
                    lineHeight="24px"
                    color="#818181"
                    validate={(value: String) => {
                      let error;
                      if (value.length < 6) {
                        error = "비밀번호를 입력하세요";
                      }
                      return error;
                    }}
                  />
                  {/* <FormErrorMessage>{errors.password}</FormErrorMessage> */}
                </FormControl>
                <Button
                  type="submit"
                  colorScheme="teal"
                  width="full"
                  height={"32px"}
                  borderRadius={"12"}
                >
                  로그인
                </Button>
                <hr />
                <Button
                  w={"100%"}
                  mb={"8px"}
                  bg={"gray.100"}
                  h={"32px"}
                  justifyContent={"flex-start"}
                  px={"8px"}
                  gap={"8px"}
                  borderRadius={"12"}
                >
                  <Icon as={FcGoogle} w="14px" h="14px" />
                  <Text
                    fontFamily="Inter"
                    fontStyle="normal"
                    fontWeight="600"
                    fontSize="16px"
                    lineHeight="24px"
                    letterSpacing={"-2.5%"}
                    color={"#000000"}
                    width={"298px"}
                  >
                    Countinue with Google
                  </Text>
                </Button>
                <Box pt="8px">
                  <Link
                    href="/"
                    height={"24px"}
                    fontFamily="Inter"
                    fontStyle="normal"
                    fontWeight="600"
                    fontSize="16px"
                    lineHeight="24px"
                    letterSpacing={"-2.5%"}
                    color={"#000000"}
                    mr={"8px"}
                  >
                    새로 오셨나요?
                  </Link>
                  <Link
                    href="/"
                    height={"24px"}
                    fontFamily="Inter"
                    fontStyle="normal"
                    fontWeight="600"
                    fontSize="16px"
                    lineHeight="24px"
                    letterSpacing={"-2.5%"}
                    color={"teal"}
                  >
                    회원가입
                  </Link>
                </Box>
              </VStack>
            </form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
}
