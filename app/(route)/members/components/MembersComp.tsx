/* eslint-disable @next/next/no-img-element */
"use client";
import Dropdown from "@/app/components/Dropdown";
import { Skeleton } from "@/components/ui/skeleton";

import {
  TableCell,
  TableRow,
  Table,
  TableBody,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import React, { useState, useEffect } from "react";

type State = {
  state: string;
  districts: string[];
};

export const MembersComp = () => {
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
    setSelectedDistrict("");
    setSelectBranch(null);
    setSelectMember(null);
    setBranchLoading(true);
    setMemberLoading(true);
  };

  const handleDistrictChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDistrict(event.target.value);
    setBranchLoading(false);
    setMemberLoading(true);
    setSelectBranch(null);
    setSelectMember(null);
  };

  //  Loading Logic for the Branch tables
  const [branchLoading, setBranchLoading] = useState(true);
  const [memberLoading, setMemberLoading] = useState(true);

  // Push the state and district to the backend and get the branch data from there

  const [selectBranch, setSelectBranch] = useState<number | null>(null);

  // Push the selected BranchId to the backend and get the members data table from there

  const [selectMember, setSelectMember] = useState<number | null>(null);

  // Push the selected MemberId to the backend and get the member data from there

  const BranchDummyData = [
    { id: 1, branchName: "Bijwasan" },
    { id: 2, branchName: "Chhawala" },
    { id: 3, branchName: "TilakNagar" },
    { id: 4, branchName: "Kapashera" },
    { id: 5, branchName: "Safdarjang" },
    {
      id: 6,
      branchName:
        "testing purpose ke liye just to check the height dflkjaldjfladj fadfj df",
    },
    { id: 7, branchName: "Delhi" },
    { id: 8, branchName: "Mumbai" },
  ];

  const MemberDummyData = [
    { id: 1, post: "President", member: "Amit Grewal" },
    { id: 2, post: "Chota President", member: "Sachin Yadav" },
    { id: 3, post: "aur chota President", member: "Rituraj" },
    { id: 4, post: "thoda aur chota Presdient", member: "Dheeraj" },
  ];

  const MemberDetailsDummyData = {
    id: 1,
    image: "./EventCardTest.avif",
    memberName: "Amit Grewal",
    memberPost: "President",
    memberPhone: "1234567890",
    memberEmail: "jdfjadkl@gmail.com",
    memberDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus, quibusdam voluptate, natus, voluptatum quas reprehenderit quae cumque facilis quos. Quisquam, voluptate voluptatum. Natus, voluptates. Quisquam, voluptate voluptatum. Natus, voluptates.",
  };

  useEffect(() => {
    if (selectBranch) {
      setMemberLoading(false);
    } else if (!selectBranch) {
      setMemberLoading(true);
    }
  }, [selectBranch]);

  return (
    <>
      <div className="">
        <div className="flex items-center gap-5 justify-center mt-10">
          <span className="text-xl font-bold">Chose Location</span>
          <Dropdown
            selectedState={selectedState}
            selectedDistrict={selectedDistrict}
            handleStateChange={handleStateChange}
            handleDistrictChange={handleDistrictChange}
          />
        </div>
        <div className="border w-full my-10" />
        <div className="flex gap-10 redborder">
          <BranchTable
            isLoading={branchLoading}
            selectBranch={selectBranch}
            setSelectBranch={setSelectBranch}
            branchData={BranchDummyData}
          />
          <MemberTable
            isLoading={memberLoading}
            selectMember={selectMember}
            setSelectMember={setSelectMember}
            memberData={MemberDummyData}
          />
          <MemberDetails
            isLoading={memberLoading}
            selectMember={selectMember}
            setSelectMember={setSelectMember}
            memberDetailsData={MemberDetailsDummyData}
          />
        </div>
      </div>
    </>
  );
};

//  -----------------------------------------------------------

interface BranchTableProps {
  isLoading: boolean;
  selectBranch: number | null;
  setSelectBranch: React.Dispatch<React.SetStateAction<number | null>>;
  branchData: { id: number; branchName: string }[];
}
export const BranchTable: React.FC<BranchTableProps> = ({
  isLoading,
  selectBranch,
  setSelectBranch,
  branchData,
}) => {
  return (
    <>
      <div className="mt-10 h-fit w-1/4 border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="">
              <TableHead className="font-bold text-center text-lg">
                Branch
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="cursor-pointer">
            {branchData.map((branch) => (
              <>
                <BranchTableRow
                  isLoading={isLoading}
                  selectBranch={selectBranch}
                  setSelectBranch={setSelectBranch}
                  branchId={branch.id}
                  branch={branch.branchName}
                />
              </>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

//  -----------------------------------------------------------

type BranchTableRowProps = {
  isLoading: boolean;
  branch: string;
  selectBranch: number | null;
  branchId: number;
  setSelectBranch: React.Dispatch<React.SetStateAction<number | null>>;
};
export const BranchTableRow = ({
  isLoading,
  branch,
  branchId,
  selectBranch,
  setSelectBranch,
}: BranchTableRowProps) => {
  return (
    <>
      <TableRow>
        <TableCell
          onClick={() => setSelectBranch(branchId)}
          className={`font-bold text-center ${
            selectBranch === branchId && "text-blue-600"
          } text-lg`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Skeleton className="w-[150px] h-[30px] rounded-full" />
            </div>
          ) : (
            branch
          )}
        </TableCell>
      </TableRow>
    </>
  );
};

//  -----------------------------------------------------------
interface MemberTableProps {
  isLoading: boolean;
  selectMember: number | null;
  setSelectMember: React.Dispatch<React.SetStateAction<number | null>>;
  memberData: { id: number; post: string; member: string }[];
}
export const MemberTable = ({
  isLoading,
  selectMember,
  setSelectMember,
  memberData,
}: MemberTableProps) => {
  return (
    <>
      <div className="mt-10 h-fit w-1/3 border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="w-[100px] ">
              <TableHead className="font-bold  text-lg">Post</TableHead>
              <TableHead className="font-bold  text-lg">Member Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="cursor-pointer">
            {memberData.map((member) => (
              <>
                <MembersTableRow
                  isLoading={isLoading}
                  selectMember={selectMember}
                  setSelectMember={setSelectMember}
                  memberId={member.id}
                  post={member.post}
                  member={member.member}
                />
              </>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

//  -----------------------------------------------------------

type MembersTableRowProps = {
  isLoading: boolean;
  selectMember: number | null;
  setSelectMember: React.Dispatch<React.SetStateAction<null | number>>;
  memberId: number;
  post: string;
  member: string;
};
export const MembersTableRow = ({
  isLoading,
  selectMember,
  setSelectMember,
  memberId,
  post,
  member,
}: MembersTableRowProps) => {
  return (
    <>
      <TableRow
        key={memberId}
        onClick={() => setSelectMember(memberId)}
        className={`${selectMember === memberId && "text-blue-600"}`}
      >
        <TableCell className="font-bold  text-lg">
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Skeleton className="w-[150px] h-[30px] rounded-full" />
            </div>
          ) : (
            post
          )}
        </TableCell>
        <TableCell className={`font-bold  text-lg`}>
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Skeleton className="w-[150px] h-[30px] rounded-full" />
            </div>
          ) : (
            member
          )}
        </TableCell>
      </TableRow>
    </>
  );
};

//  -----------------------------------------------------------

interface MemberDetailsProps {
  isLoading: boolean;
  selectMember: number | null;
  setSelectMember: React.Dispatch<React.SetStateAction<number | null>>;
  memberDetailsData: {
    id: number;
    image: string;
    memberName: string;
    memberPost: string;
    memberPhone: string;
    memberEmail: string;
    memberDescription: string;
  };
}
export const MemberDetails = ({
  isLoading,
  selectMember,
  setSelectMember,
  memberDetailsData,
}: MemberDetailsProps) => {
  return (
    <>
      <div className="mt-10 h-fit w-1/3 border rounded-lg">
        {/* Images */}
        <img
          className="object-cover w-[450px] h-[270px] rounded-md"
          src={memberDetailsData.image}
          alt="EventCardImageTest"
        />

        {/* Title */}
        <div className="flex justify-center items-center">
          <span className="font-bold text-xl">
            {memberDetailsData.memberPost}
          </span>
        </div>

        {/* Organizer */}
        <div className="">
          <span className="font-bold text-lg">Organizer: </span>
          <span className="font-bold text-base">
            {memberDetailsData.memberName}
          </span>
        </div>

        {/* Date and Location */}
        <div className=" flex gap-10">
          <span className="font-semibold text-lg">Date: 23-12-2023</span>
          <span className="font-semibold text-lg">Location: Chhawala</span>
        </div>
        {/* Description */}
        <div className="">
          <span className="font-semibold text-lg">Description: </span>
          <span className="font-semibold text-base">
            {memberDetailsData.memberDescription}
          </span>
        </div>
      </div>
    </>
  );
};
