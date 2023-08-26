import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex w-[450px] h-fit flex-col gap-3 justify-center ">
      <Skeleton className="w-[450px] h-[270px] rounded-md" />
      <div className="flex justify-center items-center">
        <Skeleton className="w-[270px] h-[25px] rounded-full" />
      </div>
      <Skeleton className="w-[300px] h-[20px] rounded-full" />
      <Skeleton className="w-[400px] h-[20px] rounded-full" />
      <Skeleton className="w-full h-[17px] rounded-full" />
      <Skeleton className="w-full h-[17px] rounded-full" />
      <Skeleton className="w-full h-[17px] rounded-full" />
      <Skeleton className="w-full h-[17px] rounded-full" />
      <Skeleton className="w-full h-[17px] rounded-full" />
    </div>
  );
};

export default Loading;
