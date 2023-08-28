import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

export const MembersTable = ({
  post,
  member,
}: {
  post: string;
  member: string;
}) => {
  return (
    <>
      <TableRow>
        <TableCell className="font-bold text-center text-lg">{post}</TableCell>
        <TableCell className="font-bold text-center text-lg">
          {member}
        </TableCell>
      </TableRow>
    </>
  );
};

export const BranchTable = ({ branch }: { branch: string }) => {
  return (
    <>
      <TableRow>
        <TableCell className="font-bold text-center text-lg">
          {branch}
        </TableCell>
      </TableRow>
    </>
  );
};
