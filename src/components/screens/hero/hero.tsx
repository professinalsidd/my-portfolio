"use client";

import ButtonComp from "@/components/common/button";
import NavBarComp from "@/components/navbar/navbar";
import { generalInfo } from "@/constants";
import { styles } from "@/styles/home";
import { COLORS, LAYOUT, useResponsive } from "@/themes/themes";
import { Box, Card, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { Fragment } from "react";
import ExperienceComp from "../experience/experience";
import SkillsComp from "../skills/skills";
import EducationComp from "../education/education";
import ProjectsComp from "../projects/projects";
import HobbiesComp from "../hobbies/hobbies";
import CertificatesComp from "../certificates/certifcates";

const RenderItem = () => {
  const { isDesktop, isTablet, isMobile } = useResponsive();
  return (
    <Box
      sx={[
        isMobile ? LAYOUT.columnCCenter : LAYOUT.flexRowAround,
        styles(isDesktop).subRoot,
      ]}
    >
      <Grid xs={12} md={6} item sx={styles().box1}>
        <Box>
          <Typography
            color={COLORS.DIM_MEDIUM}
            sx={{ fontSize: { xs: 20, md: 25 } }}
            fontWeight="bold"
          >
            Hi, I am
          </Typography>
          <Typography
            color={COLORS.LIGHT_WHITE}
            sx={{ fontSize: { xs: 25, md: 40 } }}
            fontWeight="bold"
          >
            Siddharth Jain
          </Typography>
          <Typography
            color={COLORS.DARK_ORANGE}
            sx={{ fontSize: { xs: 28, md: 55 } }}
            fontWeight="bold"
          >
            Software Engineer
          </Typography>
        </Box>
        <Box sx={[isMobile ? LAYOUT.flexCCenter : LAYOUT.flexCCenter]}>
          <ButtonComp title="Hire Me" />
          <ButtonComp title="Download Cv" style={styles(isDesktop).button} />
        </Box>
        <Card sx={{ background: COLORS.DIM_GREY }}>
          <Box sx={[LAYOUT.flexRowAround, { p: 2 }]}>
            {generalInfo.map((item, index) => (
              <Fragment key={index}>
                <Box sx={{ p: { xs: 1, md: 2 } }}>
                  <Typography
                    sx={{
                      color: COLORS.ORANGE,
                      fontSize: { xs: 12, md: 16 },
                    }}
                  >
                    {item.num}
                  </Typography>
                  <Typography
                    sx={{
                      color: COLORS.DIM_WHITE,
                      textTransform: "capitalize",
                      fontSize: { xs: 12, md: 16 },
                    }}
                  >
                    {item.name}
                  </Typography>
                </Box>
                {index !== 2 && <span style={styles().verticalLine}></span>}
              </Fragment>
            ))}
          </Box>
        </Card>
      </Grid>
      <Grid xs={12} md={6} item mt={{ xs: 5 }}>
        <Image
          src="/logo.png"
          width={isMobile ? 220 : isTablet ? 300 : 600}
          height={isMobile ? 220 : isTablet ? 300 : 600}
          style={{
            objectFit: "contain",
          }}
          alt="man"
        />
      </Grid>
    </Box>
  );
};

const HeroComp = () => {
  return (
    <Fragment>
      <Box sx={[LAYOUT.columnCCenter, styles().root]}>
        <NavBarComp />
        {RenderItem()}
        <ExperienceComp />
        <SkillsComp />
        <EducationComp />
        <ProjectsComp />
        <HobbiesComp />
        <CertificatesComp />
      </Box>
    </Fragment>
  );
};

export default HeroComp;
