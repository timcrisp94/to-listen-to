import React from 'react'

export function TodoTask({index, todo, value, deleteTask}) {
  return <>
    <div>
      <h2 className='todo-task'>{todo.task}</h2>
      <button className='delete' onClick={() => deleteTask(index)}>x</button>
    </div>
  </>
}