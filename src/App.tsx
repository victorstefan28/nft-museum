import Navbar from "./components/navbar/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import { Button, Container, CssBaseline, Typography } from "@mui/material";

import VideoBackground from "./components/video/video";

import MyForm from "./components/MyForm";
import FirstView from "./components/FirstView/FirstView";
import IconicNFT from "./components/IconicNFT/IconicNFT";
import ExploreView from "./components/ExploreView/ExploreView";
import "./App.css";
import DigitalCollectibles from "./components/DigitalCollectibles/DigitalCollectibles";
import Powering from "./components/Powering/Powering";
import Footer from "./components/Footer/Footer";
import FrameComponent from "./components/iframe component/iframe";
import { useFrame } from "./context/FrameContext";

const frames = [
  <FrameComponent url="https://anasaea.com/viewExhibition/iByfm8Fup55nxEi55" />,
  <FrameComponent url="https://anasaea.com/viewExhibition/kfijyMn6KAYWgeexr" />,
  <FrameComponent url="https://anasaea.com/viewExhibition/x2DtizwTx22rjG3tj" />,
  <FrameComponent url="https://anasaea.com/viewExhibition/bdrjTGXX9LJG2mA5i" />,
];

function App() {
  const { activeFrame, changeFrame } = useFrame();

  if (activeFrame >= 0) {
    console.log(activeFrame);
    return frames[activeFrame];
  }
  return (
    <>
      {/* <iframe
        height={"1400"}
        width={"1000"}
        content={"fit"}
        src={"https://anasaea.com/viewExhibition/iByfm8Fup55nxEi55"}
      /> */}
      {/* <FrameComponent url="https://anasaea.com/viewExhibition/iByfm8Fup55nxEi55" /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <Container
          sx={{
            marginLeft: 0,
            position: "relative",
            width: "100%",
            maxWidth: "100%",
            height: "63rem",
            maxHeight: "100%",
          }}
          style={{ maxWidth: "100%" }}
        >
          <VideoBackground videoSource="firstvid-2.mp4">
            <Navbar />
            <FirstView />
          </VideoBackground>
        </Container>
        <IconicNFT />
        <ExploreView />
        <div>
          <DigitalCollectibles />
          <Powering />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
