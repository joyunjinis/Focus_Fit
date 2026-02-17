"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

interface Props {
  onCreate: (content: string) => void;
}
export default function TodoInputPage({ onCreate }: Props) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    const trimmed = text.trim();
    if (trimmed === "") return;
    onCreate(trimmed);
    setText("");
  };
  return (
    <div className="w-full max-w-2xl px-6 mt-4 self-stretch">
      <div className="grid grid-cols-[1fr_auto] items-center gap-4">
        <Input
          type="text"
          placeholder="할일을 입력하세요"
          className="w-90 text-[#FAFAFA]"
          value={text ?? ""}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleAdd();
            }
          }}
        />
        <Button onClick={handleAdd}>추가</Button>
      </div>
    </div>
  );
}
