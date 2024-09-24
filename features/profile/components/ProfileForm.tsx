import React, { useEffect, useState } from "react";
import { Check, Pencil } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Doc } from "@/convex/_generated/dataModel";
import { useUpdateUser } from "../../auth/api/use-update-user";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

interface ProfileFormProps {
  defaultValues?: Doc<"users"> | null;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ defaultValues }) => {
  const { mutate } = useUpdateUser();

  const [name, setName] = useState<string>();
  const [info, setInfo] = useState<string>();

  const [editName, setEditName] = useState(false);
  const [editInfo, setEditInfo] = useState(false);

  useEffect(() => {
    setName(defaultValues?.name || "");
    setInfo(defaultValues?.info || "");
  }, [defaultValues]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Actualizar los datos en la base
    mutate(
      { name, info },
      {
        onSuccess: (data) => {
          toast({
            title: "Perfil actualizado",
            description: "Tu perfil ha sido actualizado correctamente",
          });
        },
      },
    );
    setEditName(false);
    setEditInfo(false);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="mb-4 space-y-4">
        <Label htmlFor="name" className="text-teal-700">
          Tu nombre
        </Label>
        <div className="relative w-full ">
          <Input
            name="name"
            disabled={!editName}
            value={name}
            onChange={(e) => {
              console.log(e.target.value);
              setName(e.target.value);
            }}
            variant="editInput"
          />
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-300 cursor-pointer">
            {editName ? (
              <Check onClick={() => setEditName(!editName)} />
            ) : (
              <Pencil onClick={() => setEditName(!editName)} />
            )}
          </div>
        </div>
        <p className="text-sm text-gray-300 font-light">
          Este no es tu nombre de usuario o PIN. Este nombre será visible para
          tus contactos de WhatsApp.
        </p>
      </div>
      <div className="mb-4">
        <Label htmlFor="info" className="text-teal-700">
          Info.
        </Label>
        <div className="relative w-full ">
          <Input
            name="info"
            disabled={!editInfo}
            value={info}
            variant="editInput"
          />
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-300 cursor-pointer">
            {editInfo ? (
              <Check onClick={() => setEditInfo(!editInfo)} />
            ) : (
              <Pencil onClick={() => setEditInfo(!editInfo)} />
            )}
          </div>
        </div>
      </div>
      <input type="submit" hidden />
    </form>
  );
};

export default ProfileForm;
