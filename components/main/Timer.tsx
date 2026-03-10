"use client";

import { Button } from "../ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const DEFAULT_SECONDS = 25 * 60;

export default function Timer() {
  const [time, setTime] = useState(DEFAULT_SECONDS);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const id = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [isRunning]);

  const format = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setTime(DEFAULT_SECONDS);
  };

  return (
    <div>
      <Card className="w-110 h-50 mt-10 text-center bg-[#27272A] border-3 border-[#3F3F46]">
        <CardContent className="h-full w-full flex items-center justify-center">
          <div className="text-8xl font-bold tracking-widest text-[#FAFAFA] tabular-nums">
            {format(time)}
          </div>
        </CardContent>
      </Card>
      <div className="mt-4 text-center space-x-5 font-bold">
        <Button
          type="button"
          onClick={start}
          disabled={isRunning || time === 0}
        >
          GO
        </Button>
        <Button type="button" onClick={stop} disabled={!isRunning}>
          STOP
        </Button>
        <Button type="button" onClick={reset}>
          RESET
        </Button>
      </div>
    </div>
  );
}
