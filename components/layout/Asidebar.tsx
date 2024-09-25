"use client";
import ProfileScreen from "@/features/profile/components/ProfileScreen";
import SettingScreen from "@/features/settings/components/SettingScreen";
import useScreenStore from "@/store/useScreen";

const titles = {
  chat: "Chat",
  states: "Estados",
  channels: "Canales",
  community: "Comunidad",
  settings: "Configuración",
  profile: "Perfil",
};

const Asidebar = () => {
  const { step } = useScreenStore();
  return (
    <aside className="bg-[#121B21]  [flex:0_0_30%] p-4 text-white">
      <div className="flex flex-col gap-8 px-2">
        <header>
          <h1 className="text-2xl font-bold">{titles[step]}</h1>
        </header>
        {step === "chat" && <div>Chat</div>}
        {step === "states" && <div>States</div>}
        {step === "channels" && <div>Channels</div>}
        {step === "community" && <div>Community</div>}
        {step === "settings" && <SettingScreen />}
        {step === "profile" && <ProfileScreen />}
      </div>
    </aside>
  );
};

export default Asidebar;
