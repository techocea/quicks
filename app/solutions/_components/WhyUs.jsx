import { WrenchIcon } from "lucide-react";

export default function WhyUs() {
  const WhyUsData = [
    {
      id: 1,
      icon: <WrenchIcon />,
      title: "Intuit Authorized",
      description:
        "As an Intuit Authorized QSP, Visioncore Technologies is a trusted partner for CPAs, bookkeepers, accounting professionals, and small business owners, facilitating seamless day-to-day operations.",
    },
    {
      id: 2,
      icon: <WrenchIcon />,
      title: "US-based Data Centers",
      description:
        "By leveraging Visioncore Technologies' servers housed in US-based data centers, you ensure your accounting program's data is protected by US Data Security and Privacy Laws",
    },
    {
      id: 3,
      icon: <WrenchIcon />,
      title: "Customisable Platform",
      description:
        "Whether you operate solo or have a team, you can adjust computing resources based on your needs, optimizing operational efficiency",
    },
    {
      id: 4,
      icon: <WrenchIcon />,
      title: "Reduced Cost of Ownership",
      description:
        "Eliminate the need for costly IT infrastructure setups and dedicated management teams. Transition to Visioncore Technologies Cloud for a seamless QuickBooks Desktop-like experience.",
    },
    {
      id: 5,
      icon: <WrenchIcon />,
      title: "Compliances and Regulations",
      description:
        "All our data centers hold SSAE-18 Type-II (SOC-2) certification, ensuring compliance with HIPAA and PCI DSS standards. This ensures SLA-backed 99.9% uptime and robust data availability.",
    },
    {
      id: 6,
      icon: <WrenchIcon />,
      title: "24x7  Support",
      description:
        "Visioncore Technologies` Technical Support Team comprises Microsoft-certified professionals available around the clock for troubleshooting and expert guidance.",
    },
  ];
  return (
    <>
      <section
        id="benefits"
        className="bg-secondary min-h-screen m-10 max-md:mx-0 rounded-[4rem] max-md:rounded-none p-10 max-md:px-4 flex flex-col  items-center justify-center gap-y-5 "
      >
        <h1 className="text-gray font-bold text-3xl max-md:text-2xl text-center">
          Why Host QuickBooks with VisionCore Technologies?
        </h1>
        <h6 className="text-gray font-medium text-2xl max-md:text-lg text-center">
          Reasons to Help You Decide
        </h6>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1">
          {WhyUsData.map((item, index) => (
            <div
              key={item.id}
              className={`text-white flex flex-col gap-y-2.5 p-4  ${
                index === 2 || index === 5
                  ? "border-r-0 border-b max-md:border-r"
                  : "border-b border-r"
              } ${
                index === 3 || index === 4 || index === 5
                  ? "border-b-0 max-md:border-b"
                  : "border-r"
              } ${index === 5 ? "max-md:border-b-0" : ""}
              }`}
            >
              <div>
                <div className="flex items-start gap-x-2 text-lg">
                  <span>{item.icon}</span>
                  {item.title}
                </div>
              </div>
              <div>{item.description}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
