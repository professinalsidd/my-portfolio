"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styles } from "@/styles/navbar";
import ButtonComp from "../common/button";

function NavBarComp() {
  return (
    <AppBar position="static" sx={{ background: "transparent" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={styles.heading}
          >
            CV
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={[styles.heading, { display: { xs: "flex", md: "none" } }]}
          >
            CV
          </Typography>
          <Box sx={styles.content}>
            <ButtonComp link="mail" title="Hire Me" />
          </Box>
          <Box sx={{ flexGrow: 0 }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBarComp;
