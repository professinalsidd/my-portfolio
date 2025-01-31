"use client";

import useMediaQuery from "@mui/material/useMediaQuery";

// responsive section for managing screen sizes
export const useResponsive = () => {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const isTablet = useMediaQuery("(min-width:768px) and (max-width:1023px)");
  const isMobile = useMediaQuery("(max-width:767px)");

  return { isMobile, isTablet, isDesktop };
};

export const COLORS = {
  PRIMARY_BLACK: "#101828",
  PRIMARY_GREY: "#475467",
  PRIMARY_RED: "#D92D20",
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  GREY: "#D9D9D9",
  LIGHT_GREY: "#505050",
  MEDIUM_ORANGE: "#F96D00",
  MEDIUM_BLACK: "#121212",
  MID_BLACK: "#1b1611",
  DIM_MEDIUM: "#666666",
  LIGHT_WHITE: "#8e8e8d",
  DARK_ORANGE: "#F36B01",
  DIM_GREY: "#1D1C1B",
  ORANGE: "#E66702",
  DIM_WHITE: "#D0D0D0",
  MEDIUM_WHITE: "#353535",
};

// Layout section for skipped to re use this lines
export const LAYOUT = {
  flexCCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  columnCCenter: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  flexRowBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  columnStart: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  columnEnd: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  flexRowAround: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  flexCCenterWithGap: (gap = "0.2rem") => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap,
  }),
  flexColumnWithGap: (gap = "0.2rem") => ({
    display: "flex",
    flexDirection: "column",
    gap,
  }),
  flexRowWithGap: (gap = "0.2rem") => ({
    display: "flex",
    flexDirection: "row",
    gap,
  }),
  flexWrapRowWithGap: (gap = "0.5rem") => ({
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap,
  }),
  flexWrap: {
    display: "flex",
    flexWrap: "wrap",
  },
  flexRowAJCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  flexColumJCenter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  flexEndCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  AlignCenter: {
    display: "flex",
    alignItems: "center",
  },
  flexBetween: {
    display: "flex",
    justifyContent: "space-between",
  },
  flexJustifyCenter: {
    display: "flex",
    justifyContent: "center",
  },
  flexAlignRowCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  flexBetweenColumnCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  flexWrapRow: {
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
  },
  flexColumnEnd: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  flexJustifyColumnCenter: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  rowStart: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  rowEnd: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  flexColumnAround: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  flexEvenlyColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
};
