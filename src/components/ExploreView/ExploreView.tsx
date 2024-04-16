import { Button, Container, Typography } from "@mui/material";
import CarouselCard from "../CarouselCard/CarouselCard";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

const ExploreView = () => {
  return (
    <>
      <div id="explore" style={{ background: "#000", paddingBottom: "4vw" }}>
        <Typography
          sx={{
            position: "relative",
            marginTop: "2rem",
            fontSize: "5.25rem",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "700",
            color: "#FFF",
            fontStyle: "normal",
            lineHeight: "normal",
            textAlign: "center",
          }}
        >
          Explore Galleries
        </Typography>
        <div
          style={{
            flexShrink: 0,
            borderRadius: "18.75rem",
            backgroundColor: "#05FEEF",
            width: "18.75rem",
            height: "18.75rem",
            filter: "blur(200px)",
            position: "absolute",
            right: "20%",
          }}
        />
        <Swiper
          slidesPerView={2} // Default to 3 slides per view
          centeredSlides={true}
          initialSlide={1}
          spaceBetween={200}
        >
          <SwiperSlide>
            <CarouselCard
              id={0}
              name="Garden Museum"
              //description={"Memories from the Future Self"}
              imagePath="garden.png"
              museumId={1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard
              id={1}
              name="ICI Museum"
              //description={"ICONS"}
              imagePath="themuseum.png"
              museumId={3}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard
              id={2}
              name="Olympic Museum"
              imagePath="olympic.png"
              //description={"The Generational Circle"}
              museumId={2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard
              id={3}
              name="The Globe"
              //description={"Past | Present | Future"}
              imagePath="globe.png"
              museumId={0}
            />
          </SwiperSlide>
          {/* <SwiperSlide>
            <CarouselCard
              id={4}
              name="BCU Bucharest"
              //description={"Our AI Story"}
              imagePath="bcu.png"
            />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
};

export default ExploreView;
