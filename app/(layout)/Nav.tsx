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

const Nav: React.FC = () => {
  const { toggleLang } = ContextAccess();

  // write the logic for modal component open here in button of login

  return (
    <main className="fixed z-10 bg-white w-full border-b-2 border-slate-200">
      <nav className="flex flex-col md:flex-row mx-4 md:mx-8 lg:mx-16 my-2">
        <Link href={"/"}>
          <div className="flex gap-2 items-center justify-center md:gap-4">
            <div className="relative h-12 w-12  md:h-20 md:w-20">
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
            <h1 className="uppercase font-bold text-3xl max-md:text-4xl font-serif">
              <span className="text-orange-500 ">Jan</span>{" "}
              <span className="text-[#036C93]">sevaa</span>{" "}
            </h1>
          </div>
        </Link>
        <div className="flex flex-1 gap-2 md:gap-10 items-center justify-end mt-2 md:mt-0">
          <ul className="flex flex-col md:flex-row max-md:hidden gap-2 md:gap-4 md:items-center">
            <div className="flex items-center">
              <Switch onClick={() => toggleLang()} />
              <h1 className="text-xs md:text-[1.1rem] font-semibold">
                &nbsp; हिंदी
              </h1>
            </div>
            <Link href={"/members"}>
              <Button className="border text-xs md:text-[1.1rem] font-bold border-blue-500 bg-white hover:bg-white text-black hover:text-orange-500">
                Our Members
              </Button>
            </Link>
            <Link href={"/registration"}>
              <Button className="border text-xs md:text-[1.1rem] font-bold border-blue-500 bg-white hover:bg-white text-black hover:text-orange-500">
                Registration
              </Button>
            </Link>
            <Link
              className="font-bold text-sm md:text-xl text-[#036c93]"
              href={"/Aboutus"}
            >
              About Us
            </Link>
            <Link
              className="font-bold text-sm md:text-xl text-orange-500"
              href={"/Events"}
            >
              Events
            </Link>
            <Link href={"/Donation"}>
              <Button className="border text-[1.1rem] font-bold border-blue-500 bg-transparent text-black hover:text-[#036C93] hover:bg-white">
                Donate
              </Button>
            </Link>

          </ul>
        </div>
      </nav>
    </main>
  );
};

export default Nav;
