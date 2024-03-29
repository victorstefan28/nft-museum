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
      <div style={{ background: "#000", paddingBottom: "4vw" }}>
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
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={600}
          tabIndex={3}
          initialSlide={1}
          className="mySwiper"
        >
          <SwiperSlide>
            <CarouselCard
              id={0}
              name="Agerpres"
              description={"Memories from the Future Self"}
              imagePath="agerpres.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard
              id={1}
              name="David Popovici"
              description={"ICONS"}
              imagePath="david.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard
              id={2}
              name="COSR"
              imagePath="generational.png"
              description={"The Generational Circle"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard
              id={3}
              name="ICI Bucharest"
              description={"Past | Present | Future"}
              imagePath="ici.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard
              id={3}
              name="BCU Bucharest"
              description={"Our AI Story"}
              imagePath="bcu.png"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ExploreView;
