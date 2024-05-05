import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative">
      <Image
        src="/mainImg.png"
        width={1240}
        height={700}
        className="h-[500px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary opacity-80" />
      <div className="absolute top-1/2 left-20 max-md:left-0  -translate-y-1/2 max-w-[680px]  flex flex-col gap-y-6 max-md:px-5">
        <h1 className="text-[48px] max-md:text-2xl max-md:leading-[36px] leading-[52px] font-bold">
          Empower Your Business with QuickBooks Services
        </h1>
        <p className="text-lg max-md:text-sm leading-[24px] font-medium ">
          Streamline your financial management and boost productivity with
          QuickBooks. Our user-friendly software helps you stay organized and
          make informed decisions.
        </p>
        <div className="flex max-md:flex-col max-md:w-full gap-x-4 max-md:gap-y-4">
          <Button variant="default" className="rounded-none">
            Get Started
          </Button>
          <Button variant="outline" className="rounded-none">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
