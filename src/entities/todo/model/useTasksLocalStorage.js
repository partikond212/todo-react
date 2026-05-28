import React from 'react'

const  useTasksLocalStorage = () => {
    const savedTasks = localStorage.getItem("tasks");
    const saveTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));

    }
    return {
        saveTasks,
        savedTasks:savedTasks ? JSON.parse(savedTasks) : null
    }
}

export default useTasksLocalStorage