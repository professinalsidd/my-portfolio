import { COLORS } from "@/themes/themes";

export const styles = (isDesktop?: boolean, isMobile?: boolean) => ({
  button: {
    background: COLORS.MID_BLACK,
    color: COLORS.WHITE,
    height: 30,
    p: "10px 20px",
    m: 2,
    border: `2px solid ${COLORS.LIGHT_GREY}`,
    borderRadius: 1,
  },
  root: {
    borderTop: `10px solid ${COLORS.LIGHT_GREY}`,
    borderRight: `10px solid ${COLORS.LIGHT_GREY}`,
    borderLeft: `10px solid ${COLORS.LIGHT_GREY}`,
    borderRadius: "20px",
    background: COLORS.MEDIUM_BLACK,
    m: 3,
  },
  subRoot: {
    width: "100%",
    minHeight: isDesktop ? "100vh" : "50vh",
    height: "auto",
  },
  verticalLine: {
    width: 2,
    height: 50,
    background: COLORS.MEDIUM_WHITE,
  },
  box1: {
    gap: isMobile ? 2 : 5,
    display: "flex",
    flexDirection: "column",
    alignItems: isMobile ? "center" : "flex-start",
  },
});
