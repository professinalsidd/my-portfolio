import NavBarComp from "@/components/navbar/navbar";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { Fragment } from "react";

const smallDb = [
  {
    name: "experience",
    num: "3+",
  },
  {
    name: "Projects",
    num: "50+",
  },
  {
    name: "Start Journey",
    num: "26 sep 2021",
  },
];

const HeroPage = () => {
  return (
    <Fragment>
      <Box
        sx={{
          //minHeight: "100vh",
          //height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTop: "10px solid #505050",
          borderRight: "10px solid #505050",
          borderLeft: "10px solid #505050",
          borderRadius: "20px",
          flexDirection: "column",
          background: "#121212",
          m: 5,
        }}
      >
        <NavBarComp />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            minHeight: "100vh",
            height: "auto",
          }}
        >
          <Grid
            xs={12}
            md={6}
            item
            sx={{ gap: 5, display: "flex", flexDirection: "column" }}
          >
            <Box>
              <Typography variant="h4" color="#666666" fontWeight="bold">
                Hi, I am
              </Typography>
              <Typography variant="h3" color="#8e8e8d" fontWeight="bold">
                Siddharth Jain
              </Typography>
              <Typography variant="h2" color="#F36B01" fontWeight="bold">
                Software Engineer
              </Typography>
            </Box>
            <Box>
              <Button
                sx={{
                  background: "#F96D00",
                  color: "white",
                  height: 30,
                  p: "10px 20px",
                  m: 2,
                }}
              >
                Hire Me
              </Button>
              <Button
                sx={{
                  background: "#1b1611",
                  color: "white",
                  height: 30,
                  p: "10px 20px",
                  m: 2,
                  border: "2px solid #c5c5c5",
                  borderRadius: 1,
                }}
              >
                Download Cv
              </Button>
            </Box>
            <Card sx={{ background: "#1D1C1B" }}>
              <Box
                sx={{
                  display: "flex",
                  p: 2,
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                {smallDb.map((item, index) => (
                  <Fragment key={index}>
                    <Box>
                      <Typography sx={{ color: "#E66702" }}>
                        {item.num}
                      </Typography>
                      <Typography
                        sx={{ color: "#D0D0D0", textTransform: "capitalize" }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                    {index !== 2 && (
                      <span
                        style={{ width: 2, height: 50, background: "#353535" }}
                      ></span>
                    )}
                  </Fragment>
                ))}
              </Box>
            </Card>
          </Grid>
          <Grid xs={12} md={6} item>
            <Image
              src="/logo.png"
              width={600}
              height={600}
              style={{
                objectFit: "contain",
              }}
              alt="man"
            />
          </Grid>
        </Box>
      </Box>
    </Fragment>
  );
};

export default HeroPage;
