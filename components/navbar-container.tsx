"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const NavbarContainer = ({ children }: { children: React.ReactNode }) => {
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setShowBg(true);
      } else {
        setShowBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={cn(
        showBg ? "bg-primary/30" : "",
        "fixed z-40 w-full backdrop-blur-md text-white transition duration-500"
      )}
    >
      {children}
    </div>
  );
};

export default NavbarContainer;
