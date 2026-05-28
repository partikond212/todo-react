import React, { useContext } from "react";
import TodoList from "@/entities/todo/ui/TodoList";
import TodoInfo from "@/features/stats";
import SearchTaskForm from "@/features/search-task";
import AddTaskForm from "@/features/add-task";
import Button from "@/shared/ui/Button";
import styles from "./Todo.module.scss";
import { TasksContext } from "@/entities/todo";

const Todo = () => {
  const { firstIncompleteTaskRef } = useContext(TasksContext);
  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>To Do List</h1>
      <AddTaskForm styles={styles} />
      <SearchTaskForm styles={styles} />
      <TodoInfo styles={styles} />
      <Button
        onClick={() =>
          firstIncompleteTaskRef.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Show first incomplete task
      </Button>
      <TodoList styles={styles} />
    </div>
  );
};

export default Todo;
