"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";
import { useOverlay } from "@/hooks/use-overlay";
import { User } from "@prisma/client";

interface OverlayProps {
  currentUser?: User | null;
}

const Overlay: React.FC<OverlayProps> = ({ currentUser }) => {
  const overlay = useOverlay();
  const [loading, setLoading] = useState(false);

  const delay = (time: any) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  useEffect(() => {
    const onOpen = async () => {
      if (overlay.isOpen) {
        setLoading(true);
        document.body.style.overflow = "hidden";
        document.body.style.pointerEvents = "none";
        await delay(1000);
        setLoading(false);
        await delay(2000);
        overlay.onClose();
      } else {
        document.body.removeAttribute("style");
      }
    };

    onOpen();
  }, [overlay]);

  if (!overlay.isOpen) {
    return null;
  }

  return (
    <div className="bg-black/25 backdrop-blur-sm fixed inset-0 w-full min-h-screen z-50 flex items-center justify-center">
      {loading ? (
        <Loading isLarge />
      ) : (
        <p className="text-3xl">
          Xin chào, <span className="font-bold">{currentUser?.name}</span>
        </p>
      )}
    </div>
  );
};

export default Overlay;
