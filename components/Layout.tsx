import { ReactNode } from "react";
import { Grid, GridItem, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Header from "@/components/Header";
import Aside from "@/components/Aside";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

const GridContainer = styled(Grid)``;
const GridBox = styled(GridItem)``;
const BgContainer = styled(Flex)``;

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  if (router.pathname === "/home")
    return (
      <>
        <BgContainer w={"100%"} justifyContent={"center"}>
          <GridContainer
            maxW={{ base: "100%", md: "1150px" }}
            maxH={"832px"}
            templateAreas={{
              base: `"header"
                "section"
                "footer"`,
              md: `"header header header"
              "aside section blank"
              "aside section footer"`,
            }}
            gridTemplateColumns={{
              base: "1fr",
              md: "minmax(240px, 240px) minmax(517px, 517px) minmax(0,393px)",
            }}
            gap={{ base: "0", md: "10px" }}
          >
            <GridBox area={"header"} pb={"5px"}>
              <Header />
            </GridBox>
            <GridBox area={"aside"}>
              <Aside />
            </GridBox>
            <GridBox area={"section"}>
              <div>{children}</div>
            </GridBox>
            <GridBox area={"footer"}>
              <Footer />
            </GridBox>
          </GridContainer>
        </BgContainer>
      </>
    );
  else return <div>{children}</div>;
}
