import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <>
      <div className="flex flex-col space-y-5 items-center text-center justify-center h-[50vh]">
        <h1 className="text-main font-bold text-4xl max-md:text-2xl">
          Begin Your QuickBooks Hosting Journey Now
        </h1>
        <div className="flex items-center justify-center gap-x-5 max-md:flex-col w-full max-md:gap-y-2">
          <Button variant="default" className="rounded-full" asChild>
            <Link href="/contact">
              Get free trial now <ChevronRight />
            </Link>
          </Button>
          <Button variant="outlined" asChild>
            <Link href="/pricing">Check Plan & Pricing</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
