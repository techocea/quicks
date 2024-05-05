"use client";

import { Button } from "@/components/ui/button";
import { GanttChart, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  const Links = [
    {
      id: 1,
      to: "/", // Define the `to` property for the home link
      name: "Home", // Provide a name for the home link
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
    {
      id: 4,
      to: "/contact",
      name: "Contact",
    },
  ];

  return (
    <header className="bg-main flex items-center justify-between  h-[80px] px-7 max-md:px-4">
      <div className="w-full flex z-2 h-full items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <Link href="/">
            <h1 className="text-primary text-xl lg:text-2xl max-md:text-[16px] cursor-pointer">
              QB QuickBooks
            </h1>
          </Link>
        </div>
        <div className="lg:flex items-center gap-8 max-md:hidden md:hidden">
          {Links.map((item) => (
            <Link href={item.to} key={item.id}>
              <p
                className={` hover:text-primary duration-150 font-semibold ${
                  pathname === item.to ? "text-primary" : "text-white"
                }`}
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div>
        <div className="max-md:hidden">
          <Button
            variant="muted"
            className="text-white hover:text-primary duration-150 font-semibold"
          >
            Sign In
          </Button>
          <Button variant="default">Sign Up</Button>
        </div>
      </div>
      <div onClick={handleNav} className="cursor-pointer lg:hidden">
        {!nav ? (
          <X className="text-primary" size={26} />
        ) : (
          <GanttChart className="text-primary font-bold" size={32} />
        )}
        <div
          className={`${
            !nav
              ? "bg-main fixed z-[16] h-full left-0 top-[80px] w-full ease-in duration-500"
              : "fixed left-[-100%]"
          }`}
        >
          <div className="flex flex-col items-center gap-8 translate-y-1/2">
            {Links.map((item) => (
              <Link href={item.to} key={item.id}>
                <p
                  className={` hover:text-primary duration-150 font-semibold ${
                    pathname === item.to ? "text-primary" : "text-white"
                  }`}
                >
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
