import { Clock10Icon } from "lucide-react";
import Image from "next/image";

export default function Solutions() {
  const SideCardData = [
    "Access Anywhere, Anytime, Seamlessly",
    "Collaborate Effortlessly with Multiple Users",
    "Simplify Operations with no IT Headaches",
    "Guarantee High-level Data Security Standards",
  ];
  return (
    <>
      <section
        id="why-us"
        className="max-md:pb-[216px] relative flex max-md:flex-col items-center  w-full gap-x-16 max-md:gap-y-10 px-[5rem] md:p-[5rem] py-16 lg:py-20 max-md:py-16 max-md:px-4"
      >
        <div className="flex flex-col gap-y-4 max-w-[590px] w-full">
          <h1 className="xl:text-4xl max-md:text-3xl font-bold text-main">
            QuickBooks Cloud Hosting: Access Anytime, Anywhere
          </h1>
          <h6 className="text-muted font-semibold">
            Meet Your Productivity Goals: Advanced Tech Solutions for Modern
            Professionals
          </h6>
          <p className="text-muted max-md:text-sm">
            Catalyze Collaboration and Accessibility with QuickBooks Hosting.
            Seamlessly access your QuickBooks software via a secure cloud
            server, ensuring your files and data are safeguarded. Simply log in
            with your unique credentials from any location, empowering efficient
            remote work. Facilitate seamless collaboration among your team
            members, fostering productivity and cohesion.
          </p>
        </div>
        {/* Image */}
        <div className="relative ">
          <Image src="/qb_hosting.webp" width={360} height={360} />
          <div className="absolute -bottom-10 -right-40 max-md:right-0 max-md:-bottom-40">
            <SideCard SideCardData={SideCardData} />
          </div>
        </div>
      </section>
    </>
  );
}

function SideCard({ SideCardData }) {
  return (
    <div className="border-0 rounded-xl shadow-2xl bg-slate-50 p-4 w-[280px]">
      <ul className="flex flex-col gap-y-4">
        {SideCardData.map((item, index) => (
          <li key={index} className="flex items-start gap-x-2">
            <span className="text-primary">
              <Clock10Icon />
            </span>
            <p className="max-md:text-sm font-medium">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
