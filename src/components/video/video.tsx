import { Box } from "@mui/material";
import { useStyles } from "./styles";
const VideoBackground = ({ children, videoSource }: any) => {
  const classes = useStyles();

  return (
    <div>
      <video autoPlay loop muted className={classes.videoBackground}>
        <source src={videoSource ?? "firstvid.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {children}
    </div>
  );
};

export default VideoBackground;
