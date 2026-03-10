"use client";

import DiaryCardPage from "@/components/diary/DiaryCard";
import { useState } from "react";

export default function Diary() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [content, setContent] = useState("");
  const [focusTime, setFocusTime] = useState("");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#18181B]">
      <h1 className="font-bold text-[#FAFAFA] text-3xl">
        오늘도 집중하시느라 수고많으셨습니다 ☺️
      </h1>
      <p className="font-bold text-[#A1A1AA] text-[20px]">
        오늘 한일을 우리 함께 정라하는 시간을 가져볼까요?
      </p>
      <DiaryCardPage
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        content={content}
        setContent={setContent}
        focusTime={focusTime}
        setFocusTime={setFocusTime}
      />
    </div>
  );
}
