import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CirclePlus, Clock10Icon, ShieldCheck, Wrench } from "lucide-react";

export default function SolutionsPage() {
  const solutions = [
    {
      id: 1,
      icon: <Clock10Icon />,
      point: "Guaranteed 99.9% Uptime",
    },
    {
      id: 2,
      icon: <Wrench />,
      point: "Reliability Coupled with Flexibility",
    },
    {
      id: 3,
      icon: <ShieldCheck />,
      point: "Enterprise-level Security Features",
    },
    {
      id: 4,
      icon: <CirclePlus />,
      point: "Trusted Intuit Authorization:Recognized QSP Partner",
    },
  ];
  return (
    <>
      <div className="relative min-h-[500px] h-full ">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-80">
          <div className="absolute flex flex-col justify-center  max-md:px-6 lg:pl-12 h-full space-y-4 w-full max-w-[787px] ">
            <h1 className="text-white xl:text-3xl lg:text-2xl md:text-xl sm:text-lg border-b-2 border-primary ">
              Run Your Accounting Business Remotely with
            </h1>
            <h1 className="text-white font-bold xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
              QuickBooks Hosting
            </h1>
            <ul className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
              {solutions.map((item) => (
                <li key={item.id} className="flex items-start gap-x-4">
                  <span className="text-[#0FD46C]">{item.icon}</span>
                  <p className="text-white text-sm ">{item.point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="absolute bottom-[-2rem] left-1/2 shadow-lg -translate-x-1/2 bg-white p-6 max-w-[630px] max-md:w-[340px] border-0 rounded-xl ">
          <Breadcrumb className="flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/solutions/#versions">
                  Versions
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/solutions/#pricing">
                  Pricing
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/solutions/#why-us">
                  Why Us
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/solutions/#benefits">
                  Benefits
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/contact">Get Started</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </>
  );
}
