"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";

import MenuItem from "./menuItem";

const UserMenu = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div onClick={toggleOpen} className="">
          <AiOutlineMenu />
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            max-lg:w-50 
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
                label="About us"
                onClick={() => {
                  router.push("/Aboutus");
                }}
              />
              <MenuItem
                label="Our Members"
                onClick={() => {
                  router.push("/members");
                }}
              />
              <MenuItem
                label="Registration"
                onClick={() => {
                  router.push("/registration");
                }}
              />
              <MenuItem
                label="Events"
                onClick={() => {
                  router.push("/Events");
                }}
              />
              <MenuItem
                label="Donate"
                onClick={() => {
                  router.push("/Donation");
                }}
              />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
