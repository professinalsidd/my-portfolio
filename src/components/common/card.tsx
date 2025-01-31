import { COLORS, LAYOUT } from "@/themes/themes";
import { Box, Button, Card, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";

const CardComp = ({ title, data, contentStyle, type }: CardProps) => {
  const [visibleProjects, setVisibleProjects] = useState(5);
  const isAllVisible = visibleProjects >= data.length;

  const handleToggleProjects = () => {
    setVisibleProjects(isAllVisible ? 5 : data.length);
  };

  return (
    <Fragment>
      <Box sx={[LAYOUT.columnEnd, { width: "90%", mt: 2 }]}>
        <Typography sx={styles.heading}>{title}</Typography>
      </Box>
      {type === "map" ? (
        <Box sx={styles.content}>
          {data.slice(0, visibleProjects).map((project, index) => (
            <Card key={index} sx={styles.projectCard}>
              <Typography
                sx={styles.projectText}
                component="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
              </Typography>
            </Card>
          ))}
          <Box sx={styles.buttonContainer}>
            <Button onClick={handleToggleProjects} sx={styles.button}>
              {isAllVisible ? "Show Less" : "Load More"}
            </Button>
          </Box>
        </Box>
      ) : (
        <Box style={{ ...styles.content, contentStyle }}>
          {data.map((item, idx) => (
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
      )}
    </Fragment>
  );
};

export default CardComp;

const styles = {
  heading: {
    color: COLORS.DARK_ORANGE,
    fontSize: { xs: 16, md: 30 },
    textAlign: "left",
    fontWeight: "600",
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
    justifyContent: { xs: "flex-start" },
    alignItems: "center",
    width: "90%",
    gap: 2,
  },
  projectCard: {
    background: COLORS.DIM_GREY,
    borderRadius: 2,
    padding: "15px",
    textAlign: "center",
    transition: "0.3s",
    boxShadow: "0px 4px 10px rgba(89, 79, 79, 0.4)",
    "&:hover": {
      boxShadow: "0px 6px 15px rgba(255, 165, 0, 0.6)",
      transform: "scale(1.05)",
    },
  },
  projectText: {
    color: COLORS.LIGHT_WHITE,
    fontSize: "1rem",
    fontWeight: "500",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      color: COLORS.MEDIUM_ORANGE,
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    background: COLORS.MID_BLACK,
    color: COLORS.WHITE,
    padding: "10px 20px",
    borderRadius: "5px",
    fontWeight: "bold",
    "&:hover": {
      background: COLORS.MEDIUM_BLACK,
    },
  },
};
