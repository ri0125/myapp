import { List, ListItem, Flex } from "@chakra-ui/react";
import Article from "./Article";
import styled from "@emotion/styled";

const Section = styled(List)`
  /* ::-webkit-scrollbar {
    display: none;
  } */
`;
const SectionItem = styled(ListItem)``;

export default function section() {
  return (
    <Section
      spacing={"8px"}
      maxH={{ base: "100%", md: "708px" }}
      marginBottom={{ base: "50px", md: "" }}
      // overflowY={{ base: "auto", md: "visible" }}
    >
      <SectionItem>
        <Article />
      </SectionItem>
      <SectionItem>
        <Article />
      </SectionItem>
      <SectionItem>
        <Article />
      </SectionItem>
      <SectionItem>
        <Article />
      </SectionItem>
    </Section>
  );
}
