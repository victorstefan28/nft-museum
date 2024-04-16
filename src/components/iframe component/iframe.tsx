import { Button, Icon } from "@mui/material";
import { useFrame } from "../../context/FrameContext";
import LogoutIcon from "@mui/icons-material/Logout";
const FrameComponent = ({ url }: { url: string }) => {
  const { changeFrame } = useFrame();
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          size="small"
          style={{
            zIndex: "100000",
            position: "absolute",
            top: "7%",
            marginLeft: "17px",
            padding: 0,
            color: "#CCC",
          }}
          onClick={() => changeFrame(-1)}
        >
          <LogoutIcon />
        </Button>
      </div>
      <iframe
        src={url}
        style={{
          zIndex: "9999",
          position: "absolute",
          height: "100%",
          width: "100%",
          border: 0,
          //display: "none",
        }}
        sandbox={
          "allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
        }
        frameBorder={0}
      ></iframe>
    </>
  );
};

export default FrameComponent;
