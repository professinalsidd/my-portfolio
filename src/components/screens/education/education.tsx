import { COLORS, LAYOUT } from "@/themes/themes";
import { Box, Card, Typography } from "@mui/material";
import React, { Fragment } from "react";

const EducationComp = () => {
  return (
    <Fragment>
      <Box sx={[LAYOUT.columnEnd, { width: "90%" }]}>
        <Typography sx={styles.heading}>Education</Typography>
      </Box>
      <Box sx={styles.content}>
        <Card style={styles.card}>
          <Typography sx={{ p: 2 }} color={COLORS.LIGHT_WHITE}>
            Bachelor of Computer Applications [B.C.A] 2017-2020
          </Typography>
        </Card>
      </Box>
    </Fragment>
  );
};

export default EducationComp;

const styles = {
  heading: {
    color: COLORS.DARK_ORANGE,
    fontSize: { xs: 16, md: 30 },
    textAlign: "left",
    textDecoration: "underline",
    fontWeight: "900",
  },
  card: {
    background: COLORS.DIM_GREY,
    borderRadius: 2,
  },
  content: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "90%",
  },
};
