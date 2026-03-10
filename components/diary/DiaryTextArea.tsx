"use client";

import { Dispatch, SetStateAction } from "react";
import { Textarea } from "../ui/textarea";

type Props = {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
};

export default function DiaryTextAreaPage({ content, setContent }: Props) {
  return (
    <Textarea
      placeholder="오늘 하루를 기록해보아요"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      className="flex items-center justify-center w-80 h-60 text-[#FAFAFA]"
    />
  );
}
