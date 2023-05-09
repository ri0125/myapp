import styled from "@emotion/styled";
import { Formik, Field, Form, FormikErrors } from "formik";
import Link from "next/link";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import {
  Button,
  Flex,
  FormControl,
  Input,
  VStack,
  Icon,
  Text,
  Box,
} from "@chakra-ui/react";

const BgForm = styled(Flex)`
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const SignInForm = styled(Flex)`
  align-items: center;
  justify-content: start;
  gap: 30px;
`;
const LogoBox = styled(Flex)`
  align-items: center;
  flex-direction: column;
`;
const OurtownLogo = styled(Icon)`
  color: teal;
`;
const Title = styled(Text)`
  width: 216px;
  height: 48px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -2.5%;
  color: #000000;
`;
const InputForm = styled(Form)``;
const FormStack = styled(VStack)`
  align-items: center;
  width: 358px;
`;
const InputControl = styled(FormControl)``;
const InputField = styled(Field)`
  height: 32px;
  padding-right: 0;
  border: 0;
  border-radius: 12px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #818181;
`;
const LoginBtn = styled(Button)`
  background-color: teal;
  width: 100%;
  height: 32px;
  border-radius: 12px;
  color: #ffffff;
`;
const GoogleBtn = styled(Button)`
  width: 100%;
  margin-bottom: 8px;
  background-color: gray.100;
  height: 32px;
  justify-content: flex-start;
  padding-right: 8px;
  padding-left: 8px;
  gap: 8px;
  border-radius: 12px;
`;
const GoogleLogo = styled(Icon)`
  width: 14px;
  height: 14px;
`;
const GoogleText = styled(Text)`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -2.5%;
  color: #000000;
  width: 298px;
`;
const LinkBox = styled(Box)`
  padding-top: 8px;
`;
const SignUpText = styled(Text)`
  display: inline-block;
  height: 24px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -2.5%;
  color: #000000;
  margin-right: 8px;
`;
const LinkText = styled(Text)`
  display: inline-block;
  height: 24px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -2.5%;
  color: teal;
`;
interface LoginFormValues {
  email: string;
  password: string;
}

export default function SignIn() {
  const router = useRouter();
  const onSubmit = () => {
    router.push("/home");
  };
  const validate = (values: LoginFormValues): FormikErrors<LoginFormValues> => {
    const errors: FormikErrors<LoginFormValues> = {};
    if (values.email.length < 6) {
      errors.email = "";
    }
    if (values.password.length < 6) {
      errors.password = "";
    }
    return errors;
  };
  return (
    <BgForm>
      <SignInForm
        direction={{ base: "column", md: "row" }}
        w={{ base: "390px", md: "616px" }}
        h={{ base: "468px", md: "240px" }}
      >
        <LogoBox>
          <OurtownLogo
            as={MdOutlineMapsHomeWork}
            w={{ base: "120px", md: "170px" }}
            h={{ base: "120px", md: "170px" }}
          />
          <Title mt={{ base: "30px", md: "10px" }}>
            동네이야기부터 중고거래까지 가까운 이웃과 함께해요
          </Title>
        </LogoBox>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={onSubmit}
          validate={validate}
        >
          {({ handleSubmit, errors, touched }) => (
            <InputForm onSubmit={handleSubmit}>
              <FormStack>
                <InputControl isInvalid={!!errors.email && touched.email}>
                  <InputField
                    as={Input}
                    placeholder="이메일"
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                  {touched.email && errors.email && <div>{errors.email}</div>}
                </InputControl>
                <InputControl isInvalid={!!errors.email && touched.email}>
                  <InputField
                    as={Input}
                    placeholder="비밀번호"
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                  />
                  {touched.email && errors.email && <div>{errors.email}</div>}
                </InputControl>
                <LoginBtn type="submit">로그인</LoginBtn>
                <hr />
                <GoogleBtn>
                  <GoogleLogo as={FcGoogle} />
                  <GoogleText>Countinue with Google</GoogleText>
                </GoogleBtn>
                <LinkBox>
                  <Link href="/">
                    <SignUpText>새로 오셨나요?</SignUpText>
                  </Link>
                  <Link href="/">
                    <LinkText>회원가입</LinkText>
                  </Link>
                </LinkBox>
              </FormStack>
            </InputForm>
          )}
        </Formik>
      </SignInForm>
    </BgForm>
  );
}
