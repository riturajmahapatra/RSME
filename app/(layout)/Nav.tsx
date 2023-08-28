"use client";
import { Button } from "@/components/ui/button";
import "@/app/components/style.css";
import logo from "@/app/assets/logo.png";
import Image from "next/image";
import Dropdown from "@/app/components/Dropdown";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ContextAccess } from "../components/ContextAccess";
import Modal from "../components/Modal";

type NavType = {};
const Nav = ({}: NavType) => {
  const { toggleLang } = ContextAccess();

  // write the logic for modal component open here in button of login

  return (
    <main className="fixed z-10 bg-white w-full border-b-2 border-slate-200">
      <nav className="flex mx-[40px] my-2 ">
        <Link href={"/"}>
          <div className="flex  gap-4  items-center justify-center">
            <div className="relative h-20 w-20">
              <Image
                src={logo}
                alt="Blob"
                fill
                style={{
                  objectFit: "contain",
                  position: "absolute",
                  inset: "0",
                }}
              />
            </div>
            <h1 className="uppercase font-bold text-3xl font-serif">
              <span className="text-orange-500">Jan</span>{" "}
              <span className="text-[#036C93]">sevaa</span>{" "}
            </h1>
          </div>
        </Link>
        <div className="flex flex-1 gap-10 items-center  justify-end">
          {/* The Dropdown comp will be used in new page. */}
          {/* <Dropdown /> */}
          <ul className="gap-[30px]  flex items-center justify-center">
            <div className="flex justify-center items-center">
              <Switch onClick={() => toggleLang()} />
              <h1 className="text-[1.1rem] font-semibold">&nbsp; हिंदी</h1>
            </div>
            <Link href={"/membership"}>
              <Button className="border text-[1.1rem] font-bold border-blue-500 bg-white hover:bg-white text-black hover:text-orange-500 ">
                Membership
              </Button>
            </Link>
            <Link
              className="font-bold text-xl text-[#036c93]"
              href={"/Aboutus"}
            >
              About Us
            </Link>
            <Link
              className="font-bold text-xl text-orange-500  "
              href={"/Events"}
            >
              Events
            </Link>

            <Button className="border text-[1.1rem] font-bold border-blue-500 bg-transparent text-black hover:text-[#036C93] hover:bg-white">
              Donate
            </Button>

            <Link href={"/login"}>
              <Button className=" text-[1.1rem] font-semibold glow-on-hover">
                Login
              </Button>
            </Link>
          </ul>
        </div>
      </nav>
    </main>
  );
};

export default Nav;
