"use client";

import { useState, useRef } from "react";
import TodoList from "@/components/main/TodoList";
import TodoInput from "@/components/main/TodoInput";
import Timer from "@/components/main/Timer";
import DateDisplay from "@/components/main/DateDisplay";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function MainPage() {
  const [todos, setTodos] = useState<
    {
      id: number;
      isDone: boolean;
      content: string;
      date: number;
    }[]
  >([]);
  const idRef = useRef(3);
  const router = useRouter();

  const onCreate = (content: string) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const onDelete = (targetId: number) => {
    setTodos(todos.filter((todo) => todo.id != targetId));
  };

  const handleDiary = () => {
    router.push("/diary");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#18181B]">
      <div className="mb-8">
        <Timer />
      </div>
      <div className="flex items-center gap-4">
        <h1 className="font-bold text-[#FAFAFA] text-5xl">TO DO LIST</h1>
        <DateDisplay currentDate={new Date()} />
      </div>
      <div className="mt-4">
        <TodoInput onCreate={onCreate} />
      </div>
      <div className="mt-6">
        <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
      <div>
        <Button onClick={handleDiary}>회고 일기 작성하러</Button>
      </div>
    </div>
  );
}
