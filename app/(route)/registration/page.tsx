import React from "react";
import Details from "./components/Details";
import AddressDetails from "./components/AddressDetails";
import { Separator } from "@/components/ui/separator";

const page = () => {
  return (
    <main className="pt-[15vh] flex justify-center">
      {/* Form */}
      <div className="border rounded-lg min-h-screen">
        <form action="POST">
          {/* Options for teachers, students, Beneficiaries  */}
          <div className="flex justify-around h-10 border rounded-lg">
            <div className="flex items-center  gap-2">
              <span className="text-lg font-semibold">Teacher</span>
              <input type="radio" name="memberType" id="memberType" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">Student</span>
              <input type="radio" name="memberType" id="memberType" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">Beneficiaries</span>
              <input type="radio" name="memberType" id="memberType" />
            </div>
          </div>

          {/* Student Form */}
          <div className="flex flex-col gap-10 h-full w-full">
            <span className="text-2xl font-bold">Parents Details</span>

            {/* Father's Details */}
            <div className="ml-10 flex  gap-10">
              <Details parentName="Father'S" />
            </div>
            <Separator />
            {/* Mothers's Details */}
            <div className="ml-10 flex  gap-10">
              <Details parentName="Mother'S" />
            </div>
            <Separator />

            {/* Address Details */}
            <div className="ml-10 flex  gap-10">
              <AddressDetails />
            </div>
            <Separator />

          </div>
        </form>
      </div>
    </main>
  );
};

export default page;
