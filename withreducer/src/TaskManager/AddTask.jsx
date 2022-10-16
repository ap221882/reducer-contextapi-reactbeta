import React, { useState, useContext } from "react"
import { TasksDispatchContext } from "../contexts/TasksContext"

const AddTask = () => {
  const [text, setText] = useState("")
  const dispatch = useContext(TasksDispatchContext)
  return (
    <>
      <input
        placeholder='Add Task'
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <button
        onClick={() => {
          setText("")
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          })
        }}
      >
        Add
      </button>
    </>
  )
}

let nextId = 3
export default AddTask
