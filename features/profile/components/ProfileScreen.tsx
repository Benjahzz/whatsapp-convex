import React from "react";
import ProfileForm from "./ProfileForm";
import { useCurrentUser } from "../../auth/api/use-current-user";
import AvatarImage from "./AvatarImage";


const ProfileScreen = () => {
  const { data } = useCurrentUser();

  return (
    <div className="flex flex-col gap-8 px-4">
      <header>
        <h1 className="text-2xl font-bold">Perfil</h1>
      </header>
      <AvatarImage />
      <ProfileForm defaultValues={data} />
    </div>
  );
};

export default ProfileScreen;
