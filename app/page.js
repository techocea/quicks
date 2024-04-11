import React from "react";

const page = () => {
  return (
    <>
      <div className="h-screen w-screen bg-black">
        <div className="text-center h-full flex flex-col items-center gap-y-8 justify-center md:p-6 max-sm:p-4">
          <h1 className="lg:text-6xl md:text-5xl sm:text-3xl max-sm:text-2xl md:leading-[60px] text-white capitalize max-sm:w-[375px]">
            Coming Soon <br /> Transform Your Finances <br /> with&nbsp;
            <span className="font-bold text-green">QuickBooks</span>
            &nbsp;cloud hosting!
          </h1>
          <h3 className="text-white lg:w-full md:w-[675px] max-sm:w-[375px] md:text-2xl max-sm:text-lg">
            Stay tuned for an exciting update! QuickBooks is gearing up to
            revolutionize your financial management experience. Get ready to
            <span className="text-green">&nbsp;simplify</span> your finances
            like never before.
          </h3>
        </div>
      </div>
    </>
  );
};

export default page;
