const App = () => {
  return (
    <div className="h-screen w-screen bg-black">
      <div className="text-center h-full flex flex-col items-center gap-y-8 justify-center">
        <h1 className="lg:text-6xl md:text-5xl max-sm:text-4xl md:leading-[60px] text-white capitalize">
          Coming Soon
          <br /> Transform Your Finances
          <br /> with <span className="font-bold text-green">QuickBooks</span>
          &nbsp;cloud hosting !
        </h1>
        <h3 className="text-white lg:w-full md:w-[800px] md:text-2xl md:p-10 max-sm:p-8 max-sm:text-xl ">
          Stay tuned for an exciting update! QuickBooks is gearing up to
          revolutionize your financial management experience. Get ready to
          <span className="text-green">&nbsp;simplify</span> your finances like
          never before.
        </h3>
      </div>
    </div>
  );
};

export default App;
