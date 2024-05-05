import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { RedoIcon } from "lucide-react";
export default function PriceComponent() {
  const priceCardData = [
    {
      id: 1,
      title: "Basic Plan",
      purpose: "For Small Businesses",
      price: "$19/mo",
      icon: <RedoIcon />,
      details: [
        "1 User",
        "$30 on Additional User",
        "5GB Storage",
        "For One Application",
      ],
    },
    {
      id: 2,
      title: "Standard Plan",
      purpose: "For Medium Businesses",
      price: "$29/mo",
      icon: <RedoIcon />,
      details: [
        "1 User",
        "$40 on Additional User",
        "10GB Storage",
        "For One Application",
      ],
    },
    {
      id: 3,
      title: "Premium Plan",
      purpose: "For Large Businesses",
      price: "$69/mo",
      icon: <RedoIcon />,
      details: [
        "1 User",
        "$43 on Additional User",
        "10GB Storage",
        "For One Application",
        "Outlook + 5GB Storage",
      ],
    },
  ];
  return (
    <section
      id="pricing"
      className="h-full lg:m-16 md:p-8 max-md:py-16 max-md:px-8"
    >
      <div className="flex flex-col gap-y-5">
        <div>
          <h1 className="font-bold text-md text-primary ">SIMPLIFY</h1>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-main">Flexible Plans</h1>
        </div>
        <div className="grid xl:grid-cols-3 xl:items-center xl:justify-center xl:gap-x-16 lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 gap-10  max-md:gap-y-10">
          {priceCardData.map((item, index) => (
            <PriceCardComponent key={item.id} data={item} index={index} />
          ))}
        </div>
        <div className="flex text-center items-center justify-center mt-4 text-main font-bold text-md underline">
          <Link href="/pricing" className="uppercase">
            explore more in pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

function PriceCardComponent({ data, index }) {
  const cardClass = index === 1 ? "bg-main text-white" : "bg-slate-200";
  return (
    <Card className={cardClass}>
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.purpose}</CardDescription>
        <p className="text-2xl font-semibold">{data.price}</p>
      </CardHeader>
      <Separator className="bg-black/50" />
      <CardContent>
        <div className="my-4 flex justify-center w-full">
          <Button className="w-full rounded-full">Get Started</Button>
        </div>
        <p>Includes:</p>
        <ul>
          {data.details.map((detail, index) => (
            <li key={index} className="flex">
              <span>{data.icon}</span>
              {detail}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
