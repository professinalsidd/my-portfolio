import React from "react";
import { projects } from "@/constants";
import CardComp from "@/components/common/card";

const ProjectsComp = () => {
  return <CardComp title="Projects" data={projects} type="map" />;
};

export default ProjectsComp;
