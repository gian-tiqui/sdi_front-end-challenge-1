import React from "react";
import { LuTriangleRight } from "react-icons/lu";

interface DateContainerProps {
  date: string;
}

const DateContainer: React.FC<DateContainerProps> = ({ date }) => {
  const parsedDate = new Date(date);

  const day = parsedDate.getDate().toString().padStart(2, "0");
  const month = parsedDate.toLocaleDateString("en-US", { month: "short" });

  return (
    <div className="flex flex-col items-center justify-center bg-red-600 absolute h-20 w-20 ms-5 -skew-x-12 bottom-[350px] sm:bottom-[300px]">
      <p className="text-white skew-x-6 font-bold">{day}</p>
      <p className="text-white skew-x-6 font-semibold text-xs">{month}</p>
      <LuTriangleRight className="text-white absolute bottom-1 right-1" />
    </div>
  );
};

export default DateContainer;
