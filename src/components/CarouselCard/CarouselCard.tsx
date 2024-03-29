import { Button, Typography } from "@mui/material";
import { useMemo } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";

interface CarouselCardProps {
  scrollRef?: React.MutableRefObject<HTMLElement | null>;
  id?: number;
  name: string;
  description: string;
  imagePath?: string;
}

const CarouselCard = ({
  scrollRef,
  id,
  name,
  description,
  imagePath,
}: CarouselCardProps) => {
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();
  console.log(swiperSlide);
  const isActive = useMemo(() => {
    return swiperSlide?.isActive;
  }, [swiperSlide]);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            columnGap: "20px",
            marginTop: "3rem",
            flexWrap: "wrap",
            boxSizing: "border-box",
          }}
        >
          <img
            style={{
              flexShrink: 0,
              width: "55.55rem",
              height: "31.25rem",
              alignSelf: "center",
              objectFit: "contain",
            }}
            src={imagePath}
            alt="david popovici"
          ></img>
          <span
            style={{
              marginTop: "3rem",
              float: "left",
              display: "flex",
              flexDirection: "row",
            }}
          >
            (
            <div
              style={{
                width: "0.25rem",
                height: isActive ? "25.125rem" : "10.5rem",
                background: "#B9F",
                marginRight: "4.75rem",
              }}
            />
            )
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  position: "relative",
                  justifySelf: "center",
                  fontSize: "5.25rem",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: "700",
                  color: "#B9F",
                  fontStyle: "normal",
                  lineHeight: "normal",
                  top: 0,
                }}
              >
                {name}
              </Typography>
              <Typography
                sx={{
                  marginTop: "2.25rem",
                  position: "relative",
                  justifySelf: "center",
                  fontSize: "2.625rem",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: "400",
                  color: "#FFF",
                  fontStyle: "normal",
                  lineHeight: "120%",
                  top: 0,
                }}
              >
                {description}
              </Typography>
              {isActive && (
                <Button
                  variant="contained"
                  sx={{
                    flexGrow: 0,
                    flexShrink: 1,
                    width: "12.0625rem",
                    height: "4.1875rem",
                    marginTop: "2.25rem",
                    backgroundColor: "#7C34FE",
                    borderRadius: "5px",
                    border: "1px solid #7C34FE",
                    ":hover": {
                      backgroundColor: "#7C34FE",
                    },
                    fontFamily: "Montserrat, sans-serif",
                    fontStyle: "normal",
                    fontSize: "15px",
                    fontWeight: "500",
                    lineHeight: "normal",
                    padding: "16px 42px",
                    textTransform: "lowercase",
                  }}
                >
                  enter now
                </Button>
              )}
              {isActive && (
                <div
                  style={{
                    marginTop: "2.25rem",
                    display: "flex",
                    gap: "0.625rem",
                  }}
                >
                  <Button
                    sx={{
                      borderRadius: "6.25rem",
                      border: "1px solid #B9F",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0.75rem",
                      width: "2.625rem",
                      height: "2.625rem",
                      minWidth: "0",
                    }}
                    onClick={() => {
                      swiper.slidePrev();
                    }}
                  >
                    <img
                      style={{ width: "1.125rem", height: "1.125rem" }}
                      src="a-right.png"
                    />
                  </Button>
                  <Button
                    sx={{
                      borderRadius: "6.25rem",
                      border: "1px solid #B9F",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0.75rem",
                      background: "#7C34FE",
                      width: "2.625rem",
                      height: "2.625rem",
                      minWidth: "0",
                      ":hover": { background: "#7C34FE" },
                    }}
                    onClick={() => {
                      swiper.slideNext();
                    }}
                  >
                    <img
                      style={{ width: "1.125rem", height: "1.125rem" }}
                      src="a-left.png"
                    />
                  </Button>
                </div>
              )}
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default CarouselCard;
