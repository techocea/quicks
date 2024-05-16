"use client";

import Popup from "./Popup";

export default function CTA() {
  return (
    <>
      <div className="max-md:background flex flex-col space-y-5 items-center text-center justify-center mb-16">
        <h1 className="text-main font-bold text-4xl max-md:text-2xl">
          Talk to Sales Now
        </h1>
        <div className="flex items-center justify-center gap-x-5 max-md:flex-col w-full max-md:gap-y-2">
          <Popup
            subject="Schedule a Call"
            title="Schedule a free consultation"
            description="Talk with a specialist for help choosing a QuickBooks product.
            Schedule a callback at your convenience."
          />
        </div>
      </div>
    </>
  );
}
