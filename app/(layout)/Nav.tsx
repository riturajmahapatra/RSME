"use client";
import { Button } from "@/components/ui/button";
import "@/app/components/style.css";
import logo from "@/app/assets/logo.svg";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import Dropdown from "@/app/components/Dropdown";
import Link from "next/link";
import { ContextAccess } from "../components/ContextAccess";
import UserMenu from "../components/navbar/userMenu";
import { Switch } from "@/components/ui/switch";

const Nav: React.FC = () => {
  const { toggleLang } = ContextAccess();

  // write the logic for modal component open here in button of login

  return (
    <main className="fixed z-10 bg-white w-full border-b-2 border-slate-200">
      <nav className="flex flex-col max md:flex-row mx-4 md:mx-8 lg:mx-16 my-2">
        <Link href={"/"}>
          <div className="max-md:w-[60%] flex gap-2 items-center justify-start md:gap-4">
            <div className="relative h-12 w-12 md:h-20 md:w-20">
              <Image src={logo} alt="Blob" fill className="" />
            </div>
            <h1 className="max-sm:text-2xl uppercase font-bold text-3xl max-md:text-4xl font-serif">
              <span className="text-[#112A45] ">RSME</span>{" "}
            </h1>
          </div>
        </Link>
        <div className="flex flex-1 gap-2 md:gap-10 items-center justify-end mt-2 md:mt-0">
          <ul className="flex flex-col md:flex-row max-lg:hidden gap-2 md:gap-4 md:items-center">
            <div className="flex items-center">
              <Switch onClick={() => toggleLang()} />
              <h1 className="text-xs md:text-[1.1rem] font-semibold">
                &nbsp; हिंदी
              </h1>
            </div>
            <Link href={"/members"}>
              <Button className="text-xs md:text-[1.1rem] font-bold bg-white hover:bg-white text-[#036c93] hover:text-blue-300">
                Our Members
              </Button>
            </Link>
            <Link href={"/registration"}>
              <Button className="text-xs md:text-[1.1rem] font-bold  bg-white hover:bg-white text-[#036c93]  hover:text-blue-300">
                Registration
              </Button>
            </Link>
            <Link href={"/Aboutus"}>
              <Button className="text-xs md:text-[1.1rem] font-bold bg-white hover:bg-white text-[#036c93] hover:text-blue-300">
                About us
              </Button>
            </Link>
            <Link href={"/Events"}>
              <Button className="text-xs md:text-[1.1rem] font-bold  bg-white hover:bg-white text-[#036c93]  hover:text-blue-300">
                Events
              </Button>
            </Link>
            <Link href={"/Donation"}>
              <Button className="border text-[1.1rem] font-bold border-blue-500 bg-transparent text-black hover:text-[#036C93] hover:bg-white">
                Donate
              </Button>
            </Link>
          </ul>
          <div className="text-3xl hidden max-lg:block max-md:absolute max-md:right-4 max-md:bottom-5">
            <UserMenu />
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Nav;
