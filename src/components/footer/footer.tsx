import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  GitHub,
  Email,
  WhatsApp,
  LinkedIn,
} from "@mui/icons-material";
import { COLORS, useResponsive } from "@/themes/themes";

const FooterComp = () => {
  const { isMobile, isTablet } = useResponsive();
  return (
    <Box sx={styles.footer}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          flexDirection: isMobile ? "column" : isTablet ? "column" : "row",
        }}
      >
        <Box sx={styles.about}>
          <Typography sx={styles.name}>Siddharth Jain</Typography>
          <Typography sx={styles.description}>
            A passionate Software Engineer & Web Developer with expertise in
            React.js, React Native, and frontend technologies. Building
            user-friendly applications and mentoring future coders.
          </Typography>
        </Box>
        <Box sx={styles.social}>
          <IconButton
            component="a"
            href="https://www.instagram.com/sidd.professional/?hl=en"
            target="_blank"
            sx={styles.icon}
          >
            <Instagram />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/professional-siddharth-jain/"
            target="_blank"
            sx={styles.icon}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.facebook.com/sidd.professional"
            target="_blank"
            sx={styles.icon}
          >
            <Facebook />
          </IconButton>
          <IconButton
            component="a"
            href="https://x.com/sidd_vip"
            target="_blank"
            sx={styles.icon}
          >
            <Twitter />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/professinalsidd"
            target="_blank"
            sx={styles.icon}
          >
            <GitHub />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:professionalsiddmail@gmai.com"
            sx={styles.icon}
          >
            <Email />
          </IconButton>
          <IconButton
            component="a"
            href="https://wa.me/919259457900"
            target="_blank"
            sx={styles.icon}
          >
            <WhatsApp />
          </IconButton>
        </Box>
      </Box>
      <Typography sx={styles.copyright}>
        © {new Date().getFullYear()} Siddharth Jain. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default FooterComp;

// Styles
const styles = {
  footer: {
    background: COLORS.GREY_PRIMARY,
    color: COLORS.LIGHT_WHITE,
    padding: "20px 10%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: { xs: "space-between", md: "center" },
    width: "80%",
    mt: 5,
  },
  about: {
    textAlign: "left",
    width: "100%",
    maxWidth: "600px",
  },
  name: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: COLORS.DARK_ORANGE,
  },
  description: {
    fontSize: "0.9rem",
    marginTop: "5px",
    color: COLORS.LIGHT_WHITE,
  },
  social: {
    marginTop: "15px",
    display: "flex",
    gap: { xs: "2px", md: "10px" },
    justifyContent: "center",
  },
  icon: {
    color: COLORS.LIGHT_WHITE,
    "&:hover": {
      color: COLORS.MEDIUM_ORANGE,
    },
  },
  copyright: {
    marginTop: "15px",
    fontSize: "0.8rem",
    color: "gray",
  },
};
