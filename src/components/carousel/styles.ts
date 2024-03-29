import { createStyles, makeStyles, Theme } from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    itemContainer: {
      position: "relative", // for positioning nav arrows and text
    },
    imageContainer: {
      position: "relative",
    },
    image: {
      width: "100%",
      height: "500px", // Adjust as needed
      objectFit: "cover",
    },
    itemText: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      // ...other styles for centering text
    },
    textContainer: {
      textAlign: "left",
      // ...other styling
    },
    title: {
      // ...
    },
    subtitle: {
      // ...
    },
  })
);
