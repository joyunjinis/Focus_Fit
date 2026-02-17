"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/main");
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#18181B]">
      <h1 className="text-4xl font-bold text-[#FAFAFA]">
        Welcome to Focus Fit!
      </h1>
      <p className="mt-1 text-lg text-[#A1A1AA]">
        우리 함께 시간을 나에게 맞게 사용해 보러 가볼까요?
      </p>
      <Button className="mt-2 text-xl" onClick={handleStart}>
        Start
      </Button>
    </div>
  );
}
