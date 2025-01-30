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
  LIGHT_GREY: "#F9FAFB",
  AQUA_GREEN: "#D7FFE7",
  LIGHT_BLUE: "#4DA1A9",
  MEDIUM_GREY: "#E6E6E6",
  BLUE: "#4379EE",
  DARK_GREY: "#8E8E93",
  LIGHT_GREEN: "linear-gradient(180deg, #C4F1DD 0%, #30AC76 100%)",
  GREY_DARK: "#455162",
  DIM_GREY: "#7A7A7A",
  Slate_Gray: "#475467",
  Charcoal: "#191C28",
  Raisin_Black: "#11152C",
  Light_Purple: "#9E7CFF",
  Violet_LightGold: "linear-gradient(180deg, #AD59F0 0%, #F7D357 100%)",
  Soft_Purple: "#A679FF",
  Medium_Aquamarine: "#4CCFAF",
  Fuchsia: "#FF5FCC",
  Lavender_Gray: "#D3D8E8",
  BrightPurple_GoldenYellow: "linear-gradient(90deg, #AC57F3 0%, #FDDD4A 100%)",
  BrightPurple_WarnGold:
    "linear-gradient(63.44deg, #AD58F1 16.72%, #EBC06E 83.39%)",
  DARKPurple_Deep_Navy:
    "radial-gradient(50% 50% at 50% 50%, #1D162F 0%, #020617 100%)",
  DarkMidnightBlue: "#181737",
  Turquoise: "#73CCAF",
  HOT_PINK: "#FF75D3",
  GOLDEN_YELLOW_BRIGHT_PURPLE:
    "linear-gradient(90deg, #FDDD4A 0%,#AC57F3 100%)",
  Ghost_White: "#F2F4F7",
  CharcoalBlue: "#262B42",
  DavyGray: "rgba(77, 77, 77, 0.3)",
  WebKitMask:
    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
  RichBlack: "rgba(2, 6, 23, 1)",
  SteelBlue: "rgba(71, 84, 103, 1)",
  LightMist: "#EAECF0",
  PaleSilver: "#D0D5DD",
  Line: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #7550DE 50%, rgba(0, 0, 0, 0) 100%)",
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
