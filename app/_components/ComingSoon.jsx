const ComingSoon = () => {
  return (
    <>
      <div className="h-screen w-screen bg-black">
        <div className="text-center h-full flex flex-col items-center gap-y-8 justify-center md:p-6 max-sm:p-4">
          <h1 className="flex flex-col lg:text-6xl md:text-5xl sm:text-3xl max-sm:text-2xl md:leading-[60px] text-white text-center capitalize w-auto">
            Coming Soon <span>Transform Your Finances with</span>
            <span className="font-bold text-green">QuickBooks</span>
            cloud hosting!
          </h1>
          <h3 className="text-white lg:w-full md:w-[675px] md:text-2xl max-sm:text-lg">
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

export default ComingSoon;
