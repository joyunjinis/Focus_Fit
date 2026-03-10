"use client";

type Props = {
  currentDate: Date;
};

export default function DateDisplay({ currentDate }: Props) {
  return (
    <p className="text-[#A1A1AA] mt-0.4 text-[25px] font-bold">
      {currentDate.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      })}
    </p>
  );
}
