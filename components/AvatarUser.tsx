import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useCurrentUser } from "@/features/auth/api/use-current-user";

interface AvatarUserProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc?: string;
  imageFallback?: string;
}

const AvatarUser: React.FC<AvatarUserProps> = ({ imageSrc,imageFallback, ...props }) => {
  return (
    <Avatar {...props}>
      <AvatarImage src={imageSrc} alt="Avatar" />
      
      <AvatarFallback className="text-[#121B21] text-4xl">
        {imageFallback}
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarUser;
