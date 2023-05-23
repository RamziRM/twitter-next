"use client";
import { useRouter } from "next/navigation";

import { FaFeather } from "react-icons/fa";

const SideTweetBtn = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")}>
      {/* mobile first */}
      <div
        className="
      mt-6
      lg:hidden
      rounded-full
      h-12
      w-12
      p-4
      flex
      items-center
      justify-center
      bg-sky-500
      hover:bg-opacity-80
      cursor-pointer
      "
      >
        <FaFeather size={24} color="white" />
      </div>
      {/* desktop */}
      <div
        className="
      mt-6
      hidden
      lg:block
      px-4
      py-2
      rounded-full
      bg-sky-500
      hover:bg-opacity-80
        cursor-pointer
        transition
      "
      >
        <p
          className="
        hidden
        lg:block
        text-center
        font-semibold
        text-white
        text-sm
        "
        >
          Tweet
        </p>
      </div>
    </div>
  );
};

export default SideTweetBtn;
