"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { Avatar } from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div
        className="
            items-center
            flex
            flex-row gap-3"
      >
        <div
          onClick={() => {}}
          className="
          hidden
          md:block
            py-3
            px-4
            font-semibold
            text-sm
            rounded-full
            hover:bg-neutral-100
            cursor-pointer
            transition"
        >
          airAtlanta Your Home
        </div>
        <div
          className="
        flex
        flex-row
        py-2
        px-2
        cursor-pointer
        gap-3
        border-[1px]
        border-neutral-200
        rounded-full
        items-center
        "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
        absolute
        rounded-xl
        shadow-md
        w-[40vw]
        md:w-3/4
        bg-white
        overflow-hidden
        right-0
        top-12
        text-sm
        "
        >
          <div className="flex flex-col cursor-pointer">
            <>
            <MenuItem
            onClick={() => {}}
            label="SignUp"
             />
             <MenuItem
            onClick={() => {}}
            label="LogIn"
             />
             </>
          </div>
        </div>
      )}
    </div>
  );
};
