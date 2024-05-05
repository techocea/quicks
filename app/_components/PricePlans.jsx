import { BookCheck, Hourglass } from "lucide-react";
import Image from "next/image";
import PriceComponent from "./PriceComponent";

export default function PricePlans() {
  return (
    <>
      <section className="h-full flex gap-x-10 max-md:flex-col max-md:gap-y-16 justify-between md:justify-items-start xl:justify-center xl:gap-x-16 w-full lg:p-16 p-10 max-md:px-7">
        <div className="max-w-[790px] flex flex-col gap-y-4 max-md:gap-y-6 justify-between max-md:h-full flex-1">
          <h1 className="text-secondary font-bold text-4xl max-md:text-2xl">
            Simplify Your Bookkeeping with QuickBooks
          </h1>
          <p className="text-secondary font-regular">
            Save time and ensure accurate financial management with QuickBooks.
          </p>
          <div className="flex max-md:flex-col max-md:gap-y-10 items-center justify-between w-full">
            <CardComponent
              icon={<Hourglass />}
              title="Time-Saving"
              description="Automate your bookkeeping tasks and streamline your financial processes."
            />
            <CardComponent
              icon={<BookCheck />}
              title="Accurate"
              description="Eliminate human errors and ensure precise financial records with QuickBooks."
            />
          </div>
        </div>
        <div className="relative max-md:min-w-[338px] flex items-center justify-center">
          <Image
            src="/laptop.png"
            alt="quickbooks"
            width={338}
            height={413}
            className="object-cover relative"
          />
        </div>
      </section>
      <PriceComponent />
    </>
  );
}

function CardComponent({ icon, title, description }) {
  return (
    <>
      <div className="max-w-[320px] flex flex-col gap-y-4">
        <div className="w-10 h-10  rounded-full bg-primary flex items-center justify-center">
          <span className="text-white">{icon}</span>
        </div>
        <h2 className="text-secondary lg:text-xl max-md:text-lg font-semibold">
          {title}
        </h2>
        <p className="text-secondary">{description}</p>
      </div>
    </>
  );
}
