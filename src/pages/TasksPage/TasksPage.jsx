import React from "react";
import Todo from "@/widgets/Todo";
import { TasksProvider } from "@/entities/todo";

const TasksPage = () => {
  return (
    <div>
      <h1>Список задач:</h1>
      <TasksProvider>
        <Todo />
      </TasksProvider>
    </div>
  );
};

export default TasksPage;
