import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const FooterLinks = [
    {
      id: 1,
      to: "/",
      name: "Home",
    },
    {
      id: 2,
      to: "/solutions",
      name: "Solutions",
    },
    {
      id: 3,
      to: "/pricing",
      name: "Pricing",
    },
  ];
  return (
    <footer className="bg-black text-white p-10 flex items-center justify-center">
      <div className="flex max-md:flex-col items-center max-md:items-start justify-evenly max-md:justify-between max-md:gap-y-8 w-full">
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-3">
            <p>Address</p>
            <p>Level 1, 12 Sample St, Sydney NSW </p>
          </div>
          <div className="flex flex-col gap-y-3">
            <p>Contact:</p>
            <p>0727275727</p>
          </div>
        </div>
        <Separator className="bg-white md:hidden" />
        <div className="flex  items-center space-x-4">
          {FooterLinks.map((item) => (
            <Link href={item.to} key={item.id}>
              <p>{item.name}</p>
            </Link>
          ))}
        </div>
        <Separator className="bg-white  md:hidden" />
        <div className="flex flex-col gap-y-2">
          <p>Follow quickbooks on</p>
          <span className="flex space-x-2">
            <Facebook />
            <Instagram />
            <Twitter />
          </span>
        </div>
      </div>
    </footer>
  );
}
