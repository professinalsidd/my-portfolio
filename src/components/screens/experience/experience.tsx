import { experienceData } from "@/constants";
import { COLORS, LAYOUT } from "@/themes/themes";
import { Box, Card, Typography } from "@mui/material";
import React, { Fragment } from "react";

const ExperienceComp = () => {
  return (
    <Fragment>
      <Box sx={[LAYOUT.columnEnd, { width: "90%" }]}>
        <Typography sx={styles.heading}>Experience</Typography>
      </Box>
      <Card sx={styles.card}>
        {experienceData.map((item, index) => (
          <div key={index}>
            <Typography
              sx={{ color: COLORS.ORANGE, fontSize: { xs: 22, md: 24 } }}
            >
              {item.company}
            </Typography>
            <Typography
              sx={{ color: COLORS.DIM_WHITE, fontSize: { xs: 18, md: 18 } }}
            >
              {item.date}
            </Typography>
            <Typography
              sx={{
                color: COLORS.DIM_WHITE,
                fontSize: { xs: 16, md: 17 },
                mt: 1,
              }}
            >
              Projects
            </Typography>
            {item.projects.map((project, idx) => (
              <div key={idx}>
                <Typography sx={{ color: COLORS.DIM_WHITE, mt: 1 }}>
                  {project.name}
                </Typography>
                <ul style={{ color: COLORS.LIGHT_WHITE }}>
                  {project.tasks.map((task, tIdx) => (
                    <li key={tIdx}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </Card>
    </Fragment>
  );
};

export default ExperienceComp;

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
    width: "90%",
    m: 2,
  },
};
