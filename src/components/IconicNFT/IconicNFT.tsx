import { Button, Container, Typography } from "@mui/material";

const IconicNFT = () => {
  return (
    <>
      <div style={{ background: "#000" }}>
        <Typography
          sx={{
            position: "relative",

            fontSize: "1.5625rem",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "500",
            color: "#FFF",
            fontStyle: "normal",
            lineHeight: "normal",
            textAlign: "center",
          }}
        >
          Iconic NFT Collections
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            columnGap: "20px",
            justifyContent: "center",
          }}
        >
          <img src="iconic1.png" alt="placeholder" />
          <img src="iconic2.png" alt="placeholder" />
          <img src="iconic3.png" alt="placeholder" />
          <img src="iconic4.png" alt="placeholder" />
          <img src="iconic5.png" alt="placeholder" />
          <img src="iconic6.png" alt="placeholder" />
        </div>
      </div>
    </>
  );
};

export default IconicNFT;
