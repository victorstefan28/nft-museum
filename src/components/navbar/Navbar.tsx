import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

import { useStyles } from "./styles";
interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = () => {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.root2}
      sx={{
        background:
          "linear-gradient(180deg, #000 4.33%, rgba(0, 0, 0, 0.00) 99.9%)",
        boxShadow: "none",
        height: "30%",
        position: "absolute",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ paddingLeft: "3vw", paddingTop: "2vh" }}
          className={classes.logo}
        >
          <img src="ici-d.png" alt="logo" />
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingRight: "10vw",
          }}
          className={classes.buttonsContainer}
        >
          <Button
            color="inherit"
            className={classes.button}
            sx={{
              fontWeight: "800",
              fontFamily: "Poppins, sans-serif",
              textTransform: "capitalize",
              fontSize: "1rem",
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            className={classes.button}
            sx={{
              fontFamily: "Poppins, sans-serif",
              textTransform: "capitalize",
              fontSize: "1rem",
            }}
          >
            Collections
          </Button>
          <Button
            color="inherit"
            className={classes.button}
            sx={{
              fontFamily: "Poppins, sans-serif",
              textTransform: "capitalize",
              fontSize: "1rem",
            }}
          >
            About us
          </Button>
          <Button
            color="inherit"
            className={classes.button}
            sx={{
              fontFamily: "Poppins, sans-serif",
              textTransform: "unset",
              fontSize: "1rem",
            }}
          >
            ICI.ro
          </Button>
        </Box>
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
          className={classes.buttonPurple}
        >
          explore marketplace
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
