import { Button, Typography } from "@mui/material";
import VideoBackground from "../video/video";

const Powering = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            background:
              "linear-gradient(180deg, #000 4.33%, rgba(0, 0, 0, 0.00) 99.9%)",
            top: 0,
            height: "40%",
            width: "100%",
            left: 0,
          }}
        />
        <VideoBackground videoSource="flames.mp4">
          <div
            style={{
              marginLeft: "7rem",
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "1.5rem",
              width: "56.25vw",
            }}
          >
            <Typography
              sx={{
                position: "relative",
                marginTop: "20vh",
                fontSize: "5.25rem",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "700",
                color: "#FFF",
                fontStyle: "normal",
                lineHeight: "normal",
              }}
            >
              Powering Institutional NFTs with the speed of the future
            </Typography>

            <Typography
              sx={{
                position: "relative",
                fontSize: "1.25rem",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "400",
                color: "#FFF",
                fontStyle: "normal",
                lineHeight: "normal",
              }}
            >
              The world's first state-governed NFT Marketplace buillt on
              MultiversX.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#7C34FE",
                borderRadius: "5px",
                border: "1px solid #7C34FE",
                ":hover": {
                  backgroundColor: "#7C34FE",
                },
                fontFamily: "Montserrat, sans-serif",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                padding: "16px 42px",
                textTransform: "lowercase",
              }}
              onClick={() => {
                window.location.href = "https://nft.ici.ro";
              }}
            >
              explore marketplace
            </Button>
          </div>
        </VideoBackground>
        <div
          id="blur"
          style={{
            position: "relative",
            background:
              "linear-gradient(0deg, #000 4.33%, rgba(0, 0, 0, 0.00) 99.9%)",
            bottom: 0,
            height: "13rem",
            width: "100%",
            left: 0,
          }}
        />
      </div>
    </>
  );
};

export default Powering;
