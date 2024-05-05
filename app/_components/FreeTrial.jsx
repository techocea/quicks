import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function FreeTrialSection() {
  return (
    <>
      <section className="lg:p-10 max-md:p-7 flex items-center justify-center max-md:flex-col gap-x-12 max-md:gap-y-10">
        <div className="flex flex-col gap-y-4 lg:max-w-[465px]">
          <h1 className="text-5xl max-md:text-3xl text-main font-semibold">
            Start Your Free Trial Today
          </h1>
          <p>
            Discover the power of QuickBooks and streamline your financial
            management.
          </p>
          <div className="flex max-md:flex-col max-md:gap-y-4 gap-x-4 max-md:w-full ">
            <Button>Try</Button>
            <Button variant="outline">Demo</Button>
          </div>
        </div>
        <div>
          <Image src="/Man.png" alt="quickbooks" width={390} height={480} />
        </div>
      </section>
      <section className="bg-secondary h-[400px] max-md:h-full max-md:p-7">
        <div className="h-full flex items-center justify-center">
          <div className="flex flex-col gap-y-6 items-center max-md:text-center justify-center">
            <h1 className="text-white text-5xl max-md:text-3xl font-bold">
              Stay Updated with
              <span className="text-primary">&nbsp;QuickBooks News</span>
            </h1>
            <p className="text-white lg:max-w-[502px] text-sm text-center">
              Get the latest updates, tips, and insights from QuickBooks
              delivered straight to your inbox.
            </p>
            <div className="flex w-full max-w-sm items-center ">
              <Input
                type="email"
                placeholder="Email"
                className="rounded-none"
              />
              <Button type="submit" className="rounded-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
