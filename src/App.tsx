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
function MyParentComponent() {
  const name = "Alice";

  return (
    <MyChildComponent name={name} /> // Passing the "name" prop
  );
}

// Child Component
function MyChildComponent(props: any) {
  return <p>Hello, {props.name}!</p>;
}

function TestComponent() {
  const name = "Alice";
  return <h1>Hello, {name}!</h1>;
}

function TestComponent2() {
  return <button onClick={() => {}}> Click me</button>;
}

function TestComponent3() {
  const divStyle = { color: "blue", fontSize: "12px" };
  return <div style={divStyle}>Styled text</div>;
}

function App() {
  return (
    <>
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
          <VideoBackground videoSource="firstvid.mp4">
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
