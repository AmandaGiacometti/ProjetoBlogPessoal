import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import purple from "@material-ui/core/colors/purple";

import "./Footer.css";

const roxin = purple[300];

function Footer() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box style={{ backgroundColor: "#a00000" }}>
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                style={{ color: "white" }}
              >
                Gostou do meu projeto? Você pode me encontrar por aqui: {" "}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a 
                href="https://www.linkedin.com/in/mangiaco/"
                target="_blank"
              >
                <GitHubIcon style={{ fontSize: 35, color: "white" }} />
              </a>
              <a
                href="https://github.com/ManGiaco"
                target="_blank"
              >
                <LinkedInIcon style={{ fontSize: 40, color: "white" }} />
              </a>
            </Box>
            <Box>
              <Typography
                variant="subtitle2"
                gutterBottom
                style={{ color: "white" }}
                align="center"
              >
                © 2022 Copyright: Amanda Giacometti
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
