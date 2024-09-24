import Asidebar from "@/components/layout/Asidebar";
import Navbar from "@/components/layout/Navbar";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout : React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex max-w-[1700px] h-screen py-4 w-full mx-auto">
      <Navbar />
      <Asidebar />
      <div className="flex-[2] bg-[#222E35]">{children}</div>
    </div>
  );
};

export default MainLayout;
