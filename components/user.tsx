"use client";

import Image from "next/image";
import avatar from "@/images/avatar.png";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { signOut } from "next-auth/react";
import { FiChevronDown } from 'react-icons/fi';

interface UserProps {
  name: string;
  image: string;
}

const User: React.FC<UserProps> = ({ name, image }) => {
  return (
    <div className="ml-auto">
      <Popover>
        <PopoverTrigger>
          <div className="flex gap-2 items-center">
            <Image
              src={image || avatar}
              alt={name}
              className="rounded-full object-cover"
              height={33}
              width={33}
            />
            {name}
            <FiChevronDown size={20} />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[150px] rounded-xl mt-2">
          <p className="cursor-pointer" onClick={() => signOut()}>Đăng xuất</p>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default User;
