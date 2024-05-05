import FreeTrialSection from "./_components/FreeTrial";
import Hero from "./_components/Hero";
import PricePlans from "./_components/PricePlans";
import WhyUs from "./_components/WhyUs";

const page = () => {
  return (
    <>
      <Hero />
      <WhyUs />
      <PricePlans />
      <FreeTrialSection />
    </>
  );
};

export default page;
