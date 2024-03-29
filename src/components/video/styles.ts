import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  videoBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    maxWidth: "100%",
    height: "100%",
    zIndex: -1,
    objectFit: "cover",
  },
});
