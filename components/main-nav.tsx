"use client";

import Link from "next/link";
import { Link as ScrollLink } from 'react-scroll'; 
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data?.map((route) => ({
    href: route.href,
    label: route.label,
    active: route.href === pathname,
  }));

  return (
    <nav className="ml-12 flex items-center gap-10">
      {routes?.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            "text-sm hover:text-red-500",
            route.active ? "text-red-500" : "text-white"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
