"use client";
import {
  MessageSquareText,
  MessagesSquare,
  Orbit,
  Settings,
  UsersRound,
} from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useState } from "react";
import useScreenStore from "@/store/useScreen";

const navLinks = [
  {
    icon: <MessageSquareText />,
  },
  {
    icon: <Orbit />,
  },
  {
    icon: <MessagesSquare />,
  },
  {
    icon: <UsersRound />,
  },
];

const Navbar = () => {
  const { step, setStep } = useScreenStore();
  return (
    <header className="w-20 p-2 bg-[#202C33] flex flex-col justify-between border-r border-gray-700">
      <div className="flex flex-col items-center gap-2">
        {navLinks.map((link, index) => (
          <Button
            key={index}
            className="flex items-center justify-center"
            variant={"linkIcon"}
            size={"linkIcon"}
          >
            {link.icon}
          </Button>
        ))}
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button
          className="flex items-center justify-center"
          variant={"linkIcon"}
          size={"linkIcon"}
        >
          <Settings />
        </Button>
        <Avatar onClick={() => setStep("profile")} className="cursor-pointer">
          <AvatarImage src="https://avatars.dicebear.com/api/avataaars/1.svg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Navbar;
