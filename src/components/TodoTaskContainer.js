import React from 'react'
import { TodoTask } from './TodoTask'

export function TodoTaskContainer({todos, deleteTask}) {
  return(

    <div className='class-container'>
      {todos.map((todo, index) => {
        return(
          <TodoTask
            key={index}
            index={index}
            todo={todo}
            deleteTask={deleteTask}
          />
        )
      })}
    </div>
  )
}