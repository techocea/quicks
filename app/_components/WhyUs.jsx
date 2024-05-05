import {
  BookOpen,
  ChevronRight,
  ClipboardMinus,
  FolderKanban,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function WhyUs() {
  const whyUsPoints = [
    "Streamline your invoicing process for faster payments.",
    "Track and categorize expenses with ease and accuracy.",
    "Stay organized and in control of your financial data.",
  ];

  return (
    <>
      <section className="h-full flex gap-x-10 max-md:flex-col max-md:gap-y-16 justify-between xl:justify-center xl:gap-x-16 w-full lg:p-16 p-10 max-md:px-7">
        <div className="max-w-[790px] flex flex-col gap-y-4 max-md:gap-y-6 justify-between max-md:h-full flex-1">
          <h1 className="text-secondary font-bold text-4xl max-md:text-2xl">
            Effortlessly manage your finances with QuickBooks
          </h1>
          <p className="text-secondary font-regular">
            QuickBooks makes invoicing and expense tracking a breeze, allowing
            you to focus on what you do best.
          </p>
          <div>
            {whyUsPoints.map((item, index) => (
              <ul key={index} className="flex flex-col gap-y-10">
                <li className="flex gap-x-3 max-md:text-sm text-secondary font-medium">
                  <BookOpen className="text-primary" />
                  {item}
                </li>
              </ul>
            ))}
          </div>
          <div className="flex max-md:flex-col max-md:gap-y-4 gap-x-4 max-md:w-full ">
            <Button variant="default" className="rounded-none">
              Get Started
            </Button>
            <Button variant="outline" className="rounded-none">
              Learn More
            </Button>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src="/Lady.png"
            alt="quickbooks"
            width={390}
            height={480}
            className="object-cover relative"
          />
        </div>
      </section>
      <section className="bg-secondary h-full border rounded-[4rem] max-md:rounded-none mx-10 p-10 max-md:mx-0 max-md:my-16">
        <div className="flex flex-col gap-y-10">
          <div className="lg:flex max-md:flex-col items-start max-md:text-center  justify-between text-white ">
            <h1 className="font-bold lg:text-4xl md:text-2xl max-md:text-lg lg:max-w-[480px] max-md:w-auto">
              Manage your finances with ease and precision
            </h1>
            <p className="lg:max-w-[500px] max-md:py-5 max-md:w-auto lg:text-lg md:text-[16px] max-md:text-sm">
              QuickBooks provides powerful features to help you effectively
              manage your cash flow, generate insightful reports, and seamlessly
              integrate with other essential tools. With QuickBooks, you can
              stay on top of your financials and make informed decisions to
              drive your business forward.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 items-center justify-between max-md:text-center w-full gap-[41px]">
            <CardComponent
              icon={<FolderKanban />}
              title="Efficient Cash Flow Management"
              description="Track your income and expenses, and easily monitor your cash flow in real-time."
            />
            <CardComponent
              icon={<ClipboardMinus />}
              title="Comprehensive Reporting Capabilities"
              description="Generate detailed reports to gain valuable insights into your business performance."
            />
            <CardComponent
              icon={<Wrench />}
              title="Seamless Integrations with Other Tools"
              description="Connect QuickBooks with your favorite apps and streamline your workflow."
            />
          </div>
          <div className="flex max-md:flex-col max-md:gap-y-4 gap-x-4 max-md:w-full ">
            <Button className="rounded-none">Learn More</Button>
            <Button variant="desctructive" className="text-primary">
              Sign Up <ChevronRight />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function CardComponent({ icon, title, description }) {
  return (
    <>
      <div className="max-w-[320px] flex flex-col items-center justify-center gap-y-4">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <span className="text-white">{icon}</span>
        </div>
        <h2 className="text-white lg:text-xl max-md:text-lg font-semibold">
          {title}
        </h2>
        <p className="text-white">{description}</p>
      </div>
    </>
  );
}
