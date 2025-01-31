import CardComp from "@/components/common/card";
import { skills } from "@/constants";
import React from "react";

const SkillsComp = () => {
  return <CardComp title="Skills" data={skills} />;
};

export default SkillsComp;
