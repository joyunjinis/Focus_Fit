"use client";

interface Todo {
  id: number;
  isDone: boolean;
  content: string;
}

interface Props {
  todos: Todo[];
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
}

import { Button } from "../ui/button";
export default function TodoList({ todos, onUpdate, onDelete }: Props) {
  return (
    <div className="w-full max-w-2xl px-6 mt-10 self-stretch">
      <ul className="w-full flex flex-col gap-6">
        {todos.map((todo) => (
          <li key={todo.id} className="w-full">
            <div className="grid grid-cols-[1fr_88px] items-center gap-4">
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={todo.isDone}
                  onChange={() => onUpdate(todo.id)}
                  className="h-6 w-6 rounded-lg border border-[#3F3F46] bg-[#FAFAFA] checked:bg-[#3B82F6] cursor-pointer"
                />
                <span
                  className={`text-lg font-medium ${
                    todo.isDone ? "line-through text-zinc-500" : "text-zinc-100"
                  }`}
                >
                  {todo.content}
                </span>
              </div>
              <Button
                type="button"
                onClick={() => onDelete(todo.id)}
                size="sm"
                className="w-14 h-8 text-sm"
              >
                삭제
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
