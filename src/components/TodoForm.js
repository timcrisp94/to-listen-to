import React, { useState } from "react";
import { TodoTaskContainer } from "./TodoTaskContainer";

export function TodoForm({props, todos, createTask, deleteTask}) {
  const [value, setValue] = useState('')

  function handleClick(e) {
    e.preventDefault()
    if(!value) { return }
    createTask(value)
    setValue('')
  }

  return(
    <form onSubmit={handleClick}>
      <input className="text-input" type="text" value={value} onChange={e => setValue(e.target.value)} />
      <input className="button" type="submit" value="Add" />
      <TodoTaskContainer props={props} todos={todos} deleteTask={deleteTask} />
    </form>
  )
}