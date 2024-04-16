import { Button, Typography } from "@mui/material";
import { useFrame } from "../../context/FrameContext";

const FirstView = () => {
  const { changeFrame } = useFrame();
  return (
    <>
      <div style={{ marginLeft: "2vw" }}>
        <Typography
          sx={{
            position: "relative",
            marginTop: "30vh",
            fontSize: "6.94vw",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "700",
            color: "#FFF",
            fontStyle: "normal",
            lineHeight: "normal",
          }}
        >
          romanian virtual
        </Typography>
        <Typography
          sx={{
            marginTop: "-3.47vw", // Converted from -50px
            position: "relative",
            fontSize: "11.11vw",
            fontFamily: "Rubik, sans-serif",
            WebkitTextStrokeColor: "#FFF",
            WebkitTextStrokeWidth: "0.42vw", // Adjusted from 6
            lineHeight: "normal",
            fontWeight: "800",
            color: "transparent",
          }}
        >
          museum
        </Typography>
        <Typography
          sx={{
            position: "relative",
            fontSize: "25px",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "500",
            color: "#FFF",
            fontStyle: "normal",
            lineHeight: "normal",
          }}
        >
          Institutional metaverse dedicated to showcasing art and culture.
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: "58px",
            backgroundColor: "#7C34FE",
            borderRadius: "5px",
            border: "1px solid #7C34FE",
            ":hover": {
              backgroundColor: "#7C34FE",
            },
            fontFamily: "Montserrat, sans-serif",
            fontStyle: "normal",
            fontSize: "1.25rem",
            fontWeight: "500",
            lineHeight: "normal",
            padding: "16px 42px",
            textTransform: "lowercase",
          }}
          onClick={() => changeFrame(1)}
        >
          enter now
        </Button>
      </div>
      <div
        style={{
          position: "absolute",
          background:
            "linear-gradient(0deg, #000 4.33%, rgba(0, 0, 0, 0.00) 99.9%)",
          bottom: 0,
          height: "20%",
          width: "100%",
          left: 0,
        }}
      />
    </>
  );
};

export default FirstView;
