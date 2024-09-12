import React from "react";
import Task from "./Task";
import { cn } from "../utils/cn";

function TaskStatusBar({ title, className }) {
  return (
    <>
      <div className={(cn("col-span-3 p-2 border rounded-md", className))}>
        <div className="border-b-[0.5px] border-black text-lg font-semibold">
          {title}
        </div>
        <div className="pt-2 grid grid-cols-1 gap-3">
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </>
  );
}

export default TaskStatusBar;
