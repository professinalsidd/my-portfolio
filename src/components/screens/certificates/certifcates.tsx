import React from "react";
import { certificates } from "@/constants";
import CardComp from "@/components/common/card";

const CertificatesComp = () => {
  return <CardComp title="Certificates" data={certificates} type="map" />;
};

export default CertificatesComp;
