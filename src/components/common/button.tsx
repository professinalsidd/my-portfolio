import { COLORS } from "@/themes/themes";
import { Button } from "@mui/material";
import React from "react";

const ButtonComp: React.FC<ButtonProps> = ({ style = {}, title }) => {
  return <Button sx={{ ...styles, ...style }}>{title}</Button>;
};

export default ButtonComp;

const styles = {
  background: COLORS.MEDIUM_ORANGE,
  color: COLORS.WHITE,
  height: 30,
  p: "10px 20px",
  m: 2,
  fontSize: { xs: 12, md: 16 },
  textTransform: "capitalize",
};
