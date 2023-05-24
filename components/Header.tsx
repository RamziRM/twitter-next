"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";
import { Button } from "./ui/button";

interface HeaderProps {
  label: string;
  showBackArrow?: boolean;
}

const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="border-b-[1px] border-neutral-600 p-5">
      <div className="flex flex-row items-center gap-2">
        {showBackArrow && (
          <BiArrowBack
            onClick={handleBack}
            color="white"
            size={20}
            className="
                cursor-pointer
                hover:opacity-70
                transition
                "
          />
        )}
        <h1
          className="
          text-white
          text-lg
          font-semibold
          "
        >
          {label}
        </h1>
        <Button variant={"secondary"}>BTN</Button>
      </div>
    </div>
  );
};

export default Header;
