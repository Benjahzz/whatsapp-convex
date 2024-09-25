import AvatarUser from "@/components/AvatarUser";
import { Input } from "@/components/ui/input";
import { useCurrentUser } from "@/features/auth/api/use-current-user";
import { Camera } from "lucide-react";
import React, { ChangeEvent, Fragment, useState } from "react";
import ImageCrop from "./ImageCrop";
import { useUpdateUser } from "@/features/auth/api/use-update-user";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { cn } from "@/lib/utils";

interface AvatarImageProps {
  className?: string;
  isEditable?: boolean;
}

const AvatarImage: React.FC<AvatarImageProps> = ({ className, isEditable }) => {
  const { data } = useCurrentUser();
  const { mutate } = useUpdateUser();

  const generateUploadUrl = useMutation(api.users.generateUploadUrl);

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

  const onConfirm = async (image: File) => {
    setOpen(false);
    const postUrl = await generateUploadUrl();

    const uploadResult = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": image!.type },
      body: image,
    });
    const { storageId } = await uploadResult.json();

    await mutate({ image: storageId });
  };

  return (
    <div
      className={cn("h-48 w-48 mx-auto relative group rounded-full", className)}
    >
      {/* Imagen del Avatar */}
      <AvatarUser
        className="w-full h-full rounded-full"
        imageSrc={data?.imageUrl || undefined}
        imageFallback={data?.name?.[0]}
      />

      {/* Input para cambiar la imagen */}

      {isEditable && (
        <Fragment>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full ">
            <Input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={onChangeImage}
            />
            <div className="flex flex-col items-center">
              <Camera className="text-white text-4xl" />
              <p className="text-sm uppercase text-wrap">
                Cambiar foto de perfil
              </p>
            </div>
          </div>
          <ImageCrop
            imageSrc={pendingAvatar}
            open={open}
            setOpen={setOpen}
            onConfirm={onConfirm}
          />
        </Fragment>
      )}
    </div>
  );
};

export default AvatarImage;
