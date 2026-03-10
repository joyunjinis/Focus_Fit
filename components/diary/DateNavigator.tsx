"use client";

import { Dispatch, SetStateAction } from "react";
import DateDisplay from "../main/DateDisplay";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
};

export default function DateNavigatorPage({
  currentDate,
  setCurrentDate,
}: Props) {
  const goYestetday = () => {
    const yesterday = new Date(currentDate);
    yesterday.setDate(yesterday.getDate() - 1);
    setCurrentDate(yesterday);
  };

  const goTomorrow = () => {
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(tomorrow.getDate() + 1);
    setCurrentDate(tomorrow);
  };

  return (
    <div className="flex flex-row items-center justify-center gap-x-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={goYestetday}
        className="text-[#FAFAFA] hover:text-[#FAFAFA] hover:bg-[#3F3F46]"
      >
        <ChevronLeft size={36} />
      </Button>
      <DateDisplay currentDate={currentDate} />
      <Button
        variant="ghost"
        size="icon"
        onClick={goTomorrow}
        className="text-[#FAFAFA] hover:text-[#FAFAFA] hover:bg-[#3F3F46]"
      >
        <ChevronRight size={36} />
      </Button>
    </div>
  );
}
