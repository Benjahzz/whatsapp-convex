import { Input } from "@/components/ui/input";
import AvatarImage from "@/features/profile/components/AvatarImage";
import { Search } from "lucide-react";
import React, { Fragment } from "react";

const SettingScreen = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <Input placeholder="Busca en los ajustes" className="pl-8" />
        <Search className="absolute top-1/2 left-2 transform -translate-y-1/2 size-4" />
      </div>
      <div className="flex items-center">
        <AvatarImage className="w-12 h-12"/>
        <div className="">
            <h1 className="text-sm font-bold">Configuración</h1>
            <p className="text-xs">Ocupado</p>
        </div>

      </div>
    </div>
  );
};

export default SettingScreen;
