import { hobbies } from "@/constants";
import { COLORS, LAYOUT } from "@/themes/themes";
import { Box, Card, Typography } from "@mui/material";
import React, { Fragment } from "react";

const HobbiesComp = () => {
  return (
    <Fragment>
      <Box sx={[LAYOUT.columnEnd, { width: "90%", mt: 2 }]}>
        <Typography sx={styles.heading}>Hobbies</Typography>
      </Box>
      <Box sx={styles.content}>
        {hobbies.map((item, idx) => (
          <Card key={idx} sx={styles.card}>
            <Typography
              sx={{
                color: COLORS.LIGHT_WHITE,
              }}
            >
              {item}
            </Typography>
          </Card>
        ))}
      </Box>
    </Fragment>
  );
};

export default HobbiesComp;

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
    p: { xs: 1, md: 2 },
    m: { xs: 1.2, md: 1 },
    borderRadius: 2,
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "90%",
  },
};
