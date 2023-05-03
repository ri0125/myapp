import NavBar from "@/components/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import {
  Flex,
  Box,
  Grid,
  GridItem,
  extendTheme,
  ThemeConfig,
  useColorMode,
} from "@chakra-ui/react";
import Category from "@/components/Category";
import Post from "@/components/Post";
import Header from "@/components/Header";

export default function Home() {
  return (
    <Grid
      maxW={{ base: "390px", md: "1150px" }}
      maxH={"832px"}
      templateAreas={{
        base: `"header"
               "sub"
               "main"
               "nav"`,
        md: `"header header header"
             "nav sub blank"
             "nav main blank"`,
      }}
      gridTemplateColumns={{ base: "390px", md: "240px 517px" }}
      gap={{ base: "0", md: "10px" }}
    >
      <GridItem area={"header"} pb={"5px"}>
        <Header />
      </GridItem>
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"sub"}>
        <Category />
      </GridItem>
      <GridItem area={"main"}>
        <Box gap={"8px"} h={{ base: "620px", md: "702px" }}>
          <Flex>
            <Swiper
              direction={"vertical"}
              slidesPerView={"auto"}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide style={{ width: "517px", height: "404px" }}>
                <Post />
              </SwiperSlide>
              <SwiperSlide style={{ width: "517px", height: "404px" }}>
                <Post />
              </SwiperSlide>
              <SwiperSlide style={{ width: "517px", height: "404px" }}>
                <Post />
              </SwiperSlide>
              <SwiperSlide style={{ width: "517px", height: "404px" }}>
                <Post />
              </SwiperSlide>
              <SwiperSlide style={{ width: "517px", height: "404px" }}>
                <Post />
              </SwiperSlide>
            </Swiper>
          </Flex>
        </Box>
      </GridItem>
    </Grid>
  );
}
