import React, { useReducer } from "react"
import AddTask from "./AddTask"
import TaskList from "./TaskList"
import TasksProvider from "../contexts/TasksProvider"

export const TaskManager = () => {
  return (
    <>
      <TasksProvider>
        <h1>Todo application</h1>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </>
  )
}
