import CardComp from "@/components/common/card";
import { hobbies } from "@/constants";
import React from "react";

const HobbiesComp = () => {
  return <CardComp title="Hobbies" data={hobbies} />;
};

export default HobbiesComp;
