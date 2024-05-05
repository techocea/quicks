import React from "react";
import Hero from "./_components/Hero";
import Solutions from "./_components/Solutions";
import Options from "./_components/Options";
import PriceComponent from "../_components/PriceComponent";
import WhyUs from "./_components/WhyUs";
import CTA from "./_components/CTA";

const page = () => {
  return (
    <>
      <Hero />
      <Solutions />
      <Options />
      <PriceComponent />
      <WhyUs />
      <CTA />
    </>
  );
};

export default page;
