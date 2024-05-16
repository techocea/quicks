import PriceComponent from "../_components/PriceComponent";
import CTA from "./_components/CTA";
import MainComponent from "./_components/MainComponent";

export default function Pricing() {
  return (
    <div className="pt-10 lg:pt-16 ">
      <div className="flex flex-col items-center justify-center gap-y-4 text-center px-4">
        <h1 className="text-main text-4xl max-md:text-2xl font-bold">
          Plans for every kind of business
        </h1>
        <p className="text-muted font-semibold">
          Purchase now and receive a complimentary 30-day trial of Live Expert
          Assistance*!
        </p>
      </div>
      <PriceComponent />
      <MainComponent />
      <CTA />
    </div>
  );
}
