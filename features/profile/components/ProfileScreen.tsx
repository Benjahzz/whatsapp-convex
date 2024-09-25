import React, { Fragment } from "react";
import ProfileForm from "./ProfileForm";
import { useCurrentUser } from "../../auth/api/use-current-user";
import AvatarImage from "./AvatarImage";


const ProfileScreen = () => {
  const { data } = useCurrentUser();

  return (
    <Fragment>
      <AvatarImage isEditable />
      <ProfileForm defaultValues={data} />
    </Fragment>
  );
};

export default ProfileScreen;
