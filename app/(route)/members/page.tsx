import Dropdown from "@/app/components/Dropdown";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { BranchTable, MembersTable } from "./components/MembersComp";

const page = () => {
  return (
    <main className="pt-[100px] h-full min-h-screen  mx-10">
      <div className="">
        <div className="flex itmes-center justify-center mt-10">
          <Dropdown />
        </div>
        <div className="border w-full my-10" />
        <div className="flex gap-10">
          <div className="mt-10 w-1/4 border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow className="">
                  <TableHead className="font-bold text-center text-lg">
                    Branch
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="cursor-pointer">
                <BranchTable branch="Bijwasan" />
                <BranchTable branch="Chhawala" />
                <BranchTable branch="TilakNagar" />
                <BranchTable branch="Kapashera" />
                <BranchTable branch="Safdarjang" />
                <BranchTable branch="Mera Gharr he ye testing purpose ke liye just to check the height" />
                <BranchTable branch="Delhi" />
                <BranchTable branch="Mumbai" />
              </TableBody>
            </Table>
          </div>
          <div className="mt-10 w-1/3 border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow className="w-[100px] ">
                  <TableHead className="font-bold text-center text-lg">
                    Post
                  </TableHead>
                  <TableHead className="font-bold text-center text-lg">
                    Member Name
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="cursor-pointer">
                <MembersTable post="President" member="Amit Grewal" />
                <MembersTable post="Chota President" member="Sachin Yadav" />
                <MembersTable post="aur chota President" member="Rituraj" />
                <MembersTable
                  post="thoda aur chota Presdient"
                  member="Dheeraj"
                />
                <MembersTable post="President" member="Amit Grewal" />
                <MembersTable post="Chota President" member="Sachin Yadav" />
                <MembersTable post="aur chota President" member="Rituraj" />
                <MembersTable
                  post="thoda aur chota Presdient"
                  member="Dheeraj"
                />
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
