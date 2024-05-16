import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CirclePlus, Clock10Icon, ShieldCheck, Wrench } from "lucide-react";
import React from "react";

export default function SolutionsPage() {
  const Solutions = [
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
  const BreadcrumbLinks = [
    {
      id: 1,
      href: "/solutions/#versions",
      name: "Versions",
    },
    {
      id: 2,
      href: "/solutions/#pricing",
      name: "Pricing",
    },
    {
      id: 3,
      href: "/solutions/#why-us",
      name: "Why Us",
    },
    {
      id: 4,
      href: "/solutions/#benefits",
      name: "Benefits",
    },
    {
      id: 5,
      href: "/contact",
      name: "Contact",
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
              {Solutions.map((item) => (
                <li key={item.id} className="flex items-start gap-x-4">
                  <span className="text-[#0FD46C]">{item.icon}</span>
                  <p className="text-white text-sm ">{item.point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-md:hidden absolute bottom-[-2rem] left-1/2 shadow-lg -translate-x-1/2 bg-white p-6 sm:max-w-[640px] border-0 rounded-xl">
          <Breadcrumb className="flex ">
            {BreadcrumbLinks.map((item) => (
              <React.Fragment key={item.id}>
                <BreadcrumbList className="">
                  <BreadcrumbItem>
                    <BreadcrumbLink href={item.href}>
                      {item.name}
                    </BreadcrumbLink>
                    <BreadcrumbSeparator />
                  </BreadcrumbItem>
                </BreadcrumbList>
              </React.Fragment>
            ))}
          </Breadcrumb>
        </div>
      </div>
    </>
  );
}
