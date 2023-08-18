'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RegisterModal } from "@/components/modals/register-modal";
import { LoginModal } from "@/components/modals/login-modal";
import { useOverlay } from "@/hooks/use-overlay";

const NavbarActions = () => {
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const overlay = useOverlay();

  return (
    <div className="ml-auto flex items-center gap-5">
      <Button
        variant="outline"
        className="hover:scale-105 transition duration-300"
        onClick={() => setOpen(true)}
      >
        Đăng ký
      </Button>
      <Button
        variant="destructive"
        className="hover:scale-105 transition duration-300"
        onClick={() => setOpenLogin(true)}
      >
        Đăng nhập
      </Button>
      <RegisterModal isOpen={open} onClose={() => setOpen(false)} />
      <LoginModal isOpen={openLogin} onClose={() => setOpenLogin(false)} />
    </div>
  );
};

export default NavbarActions;
