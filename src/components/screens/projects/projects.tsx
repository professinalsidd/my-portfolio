import React, { useState } from "react";
import { Box, Card, Typography, Button } from "@mui/material";
import { COLORS, LAYOUT } from "@/themes/themes";
import { projects } from "@/constants";

const ProjectsComp = () => {
  const [visibleProjects, setVisibleProjects] = useState(5);
  const isAllVisible = visibleProjects >= projects.length;

  const handleToggleProjects = () => {
    setVisibleProjects(isAllVisible ? 5 : projects.length);
  };

  return (
    <React.Fragment>
      <Box sx={[LAYOUT.columnEnd, { width: "90%", mt: 2 }]}>
        <Typography sx={styles.heading}>Projects</Typography>
      </Box>

      {/* Projects List */}
      <Box sx={styles.content}>
        {projects.slice(0, visibleProjects).map((project, index) => (
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
    </React.Fragment>
  );
};

export default ProjectsComp;

// Styles
const styles = {
  heading: {
    color: COLORS.DARK_ORANGE,
    fontSize: { xs: 16, md: 30 },
    textAlign: "left",
    textDecoration: "underline",
    fontWeight: "900",
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    gap: 2,
    width: "90%",
    marginTop: "20px",
    justifyContent: "flex-start",
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
