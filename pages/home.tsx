import { Grid, GridItem } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Nav from "@/components/Nav";
import Section from "@/components/Section";

const GridContainer = styled(Grid)``;
const GridBox = styled(GridItem)``;

export default function Home() {
  return (
    <GridContainer
      templateAreas={`"nav"
                    "section"`}
      gap={{ base: "0", md: "10px" }}
    >
      <GridBox area={"nav"}>
        <Nav />
      </GridBox>
      <GridBox area={"section"}>
        <Section />
      </GridBox>
    </GridContainer>
  );
}

/* <GridContainer
    maxW={{ base: "100%", md: "1150px" }}
    maxH={"832px"}
    templateAreas={{
      base: `"header"
              "nav"
              "section"
              "footer"`,
      md: `"header header header"
            "aside nav blank"
            "aside section footer"`,
    }}
    gridTemplateColumns={{ base: "390px", md: "240px 517px" }}
    gap={{ base: "0", md: "10px" }}
  >
    <GridBox area={"header"} pb={"5px"}>
      <Header />
    </GridBox>
    <GridBox area={"aside"}>
      <Aside />
    </GridBox>
    <GridBox area={"nav"}>
      <Nav />
    </GridBox>
    <GridBox area={"section"}>
      <Section />
    </GridBox>
    <GridBox area={"footer"}>
      <Footer />
    </GridBox>
  </GridContainer>
);*/
