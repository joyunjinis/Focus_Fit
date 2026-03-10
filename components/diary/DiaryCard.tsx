"use client";

import { Card } from "@/components/ui/card";
import DateNavigatorPage from "./DateNavigator";
import { Dispatch, SetStateAction } from "react";
import DiaryTextAreaPage from "./DiaryTextArea";
import { Button } from "../ui/button";
import { toast } from "sonner";

type Props = {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
};

export default function DiaryCardPage({
  currentDate,
  setCurrentDate,
  content,
  setContent,
}: Props) {
  const onSave = () => {
    const key = `diary-${currentDate.getFullYear()}.${String(currentDate.getMonth() + 1).padStart(2, "0")}.${String(currentDate.getDate()).padStart(2, "0")}`;
    localStorage.setItem(key, content);
    toast.success("저장되었습니다. 고생하셨습니다!");
  };
  return (
    <div>
      <Card className="w-120 h-140 text-center bg-[#27272A] border-3 border-[#3F3F46] mt-4 flex flex-col items-center p-6">
        <DateNavigatorPage
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
        <DiaryTextAreaPage content={content} setContent={setContent} />
        <div className="flex justify-end mt-2">
          <Button onClick={onSave}>저장하기</Button>
        </div>
      </Card>
    </div>
  );
}
