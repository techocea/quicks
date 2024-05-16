import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Popup from "../pricing/_components/Popup";

export default function FreeTrialSection() {
  return (
    <>
      <section className="lg:p-10 max-md:p-7 ">
        <div className="md:flex max-md:flex-col items-center justify-center max-md:justify-between gap-x-12 max-md:gap-y-10">
          <div className="flex flex-col gap-y-4 sm:max-w-[665px] w-full">
            <h1 className="md:text-4xl text-5xl max-md:text-3xl text-main font-semibold">
              Start Your Free Trial Today
            </h1>
            <p>
              Discover the power of QuickBooks and streamline your financial
              management.
            </p>
            <div className="flex max-md:flex-col gap-4 max-md:w-full">
              <Popup
                subject="Demo"
                title="Get started with a free registration"
                description="Unlock the full potential of your business with the perfect QuickBooks product."
              />
              <Button variant="outline" asChild>
                <Link href="/pricing">Try</Link>
              </Button>
            </div>
          </div>
          <div className="sm:max-w-[300px] max-md:mt-6">
            <Image src="/Man.png" alt="quickbooks" width={390} height={480} />
          </div>
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
              <Button
                type="submit"
                variant="default"
                className="rounded-none border-primary"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
