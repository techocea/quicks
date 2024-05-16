import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { freebiesList } from "@/lib/utils";
export default function MainComponent() {
  return (
    <>
      <div className="p-10 flex max-md:flex-col items-start justify-center gap-x-[10rem] max-md:gap-y-[5rem] w-full">
        <div className="flex flex-col gap-y-8">
          <h1 className="font-bold text-4xl text-main">Freebies</h1>
          <div>
            <ul className="grid grid-cols-2 gap-8 w-full">
              {freebiesList.map((item) => (
                <li key={item.id}>
                  <p className="flex items-center gap-x-2.5">
                    <span>{item.icon}</span>
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 justify-start sm:max-w-[500px]">
          <h1 className="font-bold text-2xl text-main">Note:</h1>
          <div>
            <ul className="flex flex-col gap-y-2.5 list-disc">
              {freebiesList.map((item) => (
                <li key={item.id}>
                  <p className="flex items-center text-[16px] gap-x-2.5">
                    {item.point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="max-md:hidden relative bg-secondary h-[350px] my-16 px-16 pt-12">
        <div className="absolute bottom-20">
          <Image
            src={"/image.png"}
            width={550}
            height={580}
            alt="quickbooks free"
            className="aspect-video object-contain"
          />
        </div>
        <div className="w-[500px] absolute right-20 flex flex-col gap-y-4">
          <h1 className="text-primary text-4xl leading-[48px] font-bold">
            Start Managing Your Money with QuickBooks
          </h1>
          <p className="text-white">
            Certainly! Here’s an alternative version: "If you're not ready for
            full accounting services, our new financial solution provides
            banking, payments, and a 5.00% APY—completely free of subscription
            and initial fees."
          </p>
        </div>
      </div>
    </>
  );
}
