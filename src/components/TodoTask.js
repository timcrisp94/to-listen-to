import React from 'react'

export function TodoTask({index, todo, value, deleteTask}) {
  return <>
    <div>
      <span>{todo.task}</span>
      <button className='delete' onClick={() => deleteTask(index)}>x</button>
    </div>
  </>
}