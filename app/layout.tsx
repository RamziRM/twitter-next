// this is the root layout for all pages
// main entry point of the app

import "../styles/globals.css";
import Sidebar from "../components/sidebar/Sidebar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootProps> = ({ children }) => {
  return (
    <div className="h-screen bg-slate-800">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-500">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
