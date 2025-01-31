import CardComp from "@/components/common/card";
import { education } from "@/constants";
import React from "react";

const EducationComp = () => {
  return (
    <CardComp
      title="Education"
      data={education}
      contentStyle={{
        display: "flex",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    />
  );
};

export default EducationComp;
