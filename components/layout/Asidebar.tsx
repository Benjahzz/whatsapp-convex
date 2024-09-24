"use client";
import ProfileScreen from "@/features/profile/components/ProfileScreen";
import useScreenStore from "@/store/useScreen";

const Asidebar = () => {
  const { step } = useScreenStore();
  return (
    <aside className="bg-[#121B21]  [flex:0_0_30%] p-4 text-white">
      {step === "chat" && <div>Chat</div>}
      {step === "states" && <div>States</div>}
      {step === "channels" && <div>Channels</div>}
      {step === "community" && <div>Community</div>}
      {step === "profile" && <ProfileScreen />}
    </aside>
  );
};

export default Asidebar;
