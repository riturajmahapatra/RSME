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
import axios from "axios";

type State = {
  state: string;
  districts: string[];
};

export const MembersComp = () => {
  //  Loading Logic for the Branch tables
  const [branchLoading, setBranchLoading] = useState(true);
  const [memberLoading, setMemberLoading] = useState(true);

  const [selectedBranchId, setSelectedBranchId] = useState<number | null>(null);
  console.log(selectedBranchId);
  // Push the selected BranchId to the backend and get the members data table from there

  const [selectMember, setSelectMember] = useState<number>(0);

  // Push the selected MemberId to the backend and get the member data from there
  const MemberDummyData = [
    { id: 1, post: "President", member: "Amit Grewal" },
    { id: 2, post: "Chota President", member: "Sachin Yadav" },
    { id: 3, post: "aur chota President", member: "Rituraj" },
    { id: 4, post: "thoda aur chota Presdient", member: "Dheeraj" },
  ];

  const MemberDetailsDummyData = {
    id: 1,
    image: "./EventCardTest.avif",
    memberName: "Mr. Amit Grewal",
    memberPost: "President",
    memberPhone: "1234567890",
    memberEmail: "jdfjadkl@gmail.com",
    memberDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus, quibusdam voluptate, natus, voluptatum quas reprehenderit quae cumque facilis quos. Quisquam, voluptate voluptatum. Natus, voluptates. Quisquam, voluptate voluptatum. Natus, voluptates.",
  };

  useEffect(() => {
    if (selectedBranchId) {
      setMemberLoading(false);
    } else if (!selectedBranchId) {
      setMemberLoading(true);
    }
  }, [selectedBranchId]);

  return (
    <>
      <div className="">
        <div className="flex items-center gap-5 justify-center mt-10">
          <span className="text-xl font-bold">Chose Location</span>
          <Dropdown
            selectedBranchId={selectedBranchId}
            setSelectedBranchId={setSelectedBranchId}
          />
        </div>
        <div className="border w-full my-10" />
        <div className="flex gap-10">
          <div className="mt-10 h-fit w-1/3 border rounded-lg">
            <MemberTable
              isLoading={memberLoading}
              selectMember={selectMember}
              setSelectMember={setSelectMember}
              memberData={MemberDummyData}
            />
          </div>
          <div className="mt-10 h-fit flex justify-center w-1/3 rounded-lg">
            <MemberDetails
              isLoading={memberLoading}
              selectMember={selectMember}
              setSelectMember={setSelectMember}
              memberDetailsData={MemberDetailsDummyData}
            />
          </div>
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
  selectMember: number;
  setSelectMember: React.Dispatch<React.SetStateAction<number>>;
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
    </>
  );
};

//  -----------------------------------------------------------

type MembersTableRowProps = {
  isLoading: boolean;
  selectMember: number;
  setSelectMember: React.Dispatch<React.SetStateAction<number>>;
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
  selectMember: number;
  setSelectMember: React.Dispatch<React.SetStateAction<number>>;
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
      <div className="rounded-lg w-[450px] p-2 gap-5 border flex flex-col items-center">
        {/* Images */}
        {isLoading ? (
          <div className="flex items-center justify-center">
            <Skeleton className="w-[430px] h-[270px] rounded-md" />
          </div>
        ) : (
          <img
            className="object-cover w-[430px] h-[270px] rounded-md"
            src={memberDetailsData.image}
            alt="EventCardImageTest"
          />
        )}

        {/* Title */}
        <div className="flex justify-center items-center">
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Skeleton className="w-[200px] h-[30px] rounded-full" />
            </div>
          ) : (
            <span className="font-bold text-xl flex flex-col">
              {memberDetailsData.memberPost} {memberDetailsData.memberName}
            </span>
          )}
        </div>

        {/* Date and Location */}
        <div className=" flex gap-3 w-full flex-col">
          {isLoading ? (
            <>
              <Skeleton className="w-[300px] h-[30px] rounded-full" />
              <Skeleton className="w-[350px] h-[30px] rounded-full" />
            </>
          ) : (
            <>
              <span className="font-semibold text-lg">
                Phone no: {memberDetailsData.memberPhone}
              </span>
              <span className="font-semibold text-lg">
                Email: {memberDetailsData.memberEmail}
              </span>
            </>
          )}
        </div>
        {/* Description */}
        <div className="text-justify">
          <span className="font-semibold text-base ">
            {isLoading ? (
              <>
                <div className="flex flex-col gap-2">
                  <Skeleton className="w-[400px] h-[20px] rounded-full" />
                  <Skeleton className="w-[400px] h-[20px] rounded-full" />
                  <Skeleton className="w-[400px] h-[20px] rounded-full" />
                  <Skeleton className="w-[400px] h-[20px] rounded-full" />
                </div>
              </>
            ) : (
              memberDetailsData.memberDescription
            )}
          </span>
        </div>
      </div>
    </>
  );
};
