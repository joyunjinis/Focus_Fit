"use client";

import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction } from "react";

type Props = {
  focusTime: string;
  setFocusTime: Dispatch<SetStateAction<string>>;
};

export default function FocusTimePage({ focusTime, setFocusTime }: Props) {
  return (
    <div>
      <h1 className="text-[#FAFAFA] font-bold text-[23px]">
        오늘의 집중 시간은? ⏱️
      </h1>
      <Input
        type="number"
        placeholder="0"
        value={focusTime}
        onChange={(e) => setFocusTime(e.target.value)}
        className="text-[#FAFAFA] font-bold mt-2"
      />
    </div>
  );
}
