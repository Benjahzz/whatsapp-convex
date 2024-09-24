import AvatarUser from "@/components/AvatarUser";
import { Input } from "@/components/ui/input";
import { useCurrentUser } from "@/features/auth/api/use-current-user";
import { Camera } from "lucide-react";
import React, { ChangeEvent, useState } from "react";
import ImageCrop from "./ImageCrop";
import { useUpdateUser } from "@/features/auth/api/use-update-user";

const AvatarImage = () => {
  const { data } = useCurrentUser();
  const {mutate} = useUpdateUser();

  const [pendingAvatar, setPendingAvatar] = useState<string>("");

  const [open, setOpen] = useState(false);

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPendingAvatar(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
    setOpen(true);
  };

  const onConfirm = () => {
    setOpen(false);
    mutate({ image: pendingAvatar });
  }

  return (
    <div className="h-48 w-48 mx-auto relative group rounded-full">
      {/* Imagen del Avatar */}
      <AvatarUser
        className="w-full h-full rounded-full"
        imageSrc={data?.imageUrl || undefined}
        imageFallback={data?.name?.[0]}
      />

      {/* Input para cambiar la imagen */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
        <Input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={onChangeImage}
        />
        <div className="flex flex-col items-center">
          <Camera className="text-white text-4xl" />
          <p className="text-sm uppercase text-wrap">Cambiar foto de perfil</p>
        </div>
      </div>
      <ImageCrop imageSrc={pendingAvatar} open={open} setOpen={setOpen} onConfirm={onConfirm} />
    </div>
  );
};

export default AvatarImage;
