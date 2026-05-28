import React, { memo, useContext } from "react";
import { TasksContext } from "@/entities/todo";
import styles from "./TodoItem.module.scss";
import RouterLink from "@/shared/ui/RouterLink/RouterLink";
import { highlightCaseInsensitive } from "@/shared/utils/highlight";

const TodoItem = (props) => {
  const { title, isDone, className = "", id } = props;
  const {
    firstIncompleteTaskId,
    firstIncompleteTaskRef,
    deleteTask,
    toggleTaskComplete,
    disappearingTasksId,
    appearingTaskId,
    searchQuery,
  } = useContext(TasksContext);
  const highlighteditle = highlightCaseInsensitive(title, searchQuery);
  return (
    <li
      className={`${styles.todoItem} ${className}
     ${disappearingTasksId === id ? styles.isDisappearing : ""} ${appearingTaskId === id ? styles.isAppearing : ""}`}
      ref={id === firstIncompleteTaskId ? firstIncompleteTaskRef : null}
    >
      <input
        className={styles.checkbox}
        id={id}
        type="checkbox"
        checked={isDone}
        onChange={({ target }) => toggleTaskComplete(id, target.checked)}
      />
      <label className={` ${styles.label} visually-hidden`} htmlFor={id}>
        {title}
      </label>
      <RouterLink aria-label="Task detail page" to={`tasks/${id}`}>
        {/* {title} */}
        <span dangerouslySetInnerHTML={{ __html: highlighteditle }} />
      </RouterLink>
      <button
        onClick={() => deleteTask(id)}
        className={styles.deleteButton}
        aria-label="Delete"
        title="Delete"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L5 15M5 5L15 15"
            stroke="#757575"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  );
};

export default memo(TodoItem);
