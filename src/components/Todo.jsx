import React from 'react'

const Todo = ({ todo, removeTodo, completeTodo }) => {
    return (
        <div className="todo" 
        style={{textDecoration: todo.isCompleted ? "line-through" : ""}}> {/* no style está sendo colocado uma linha se a tarefa estiver completa, se não tiver não é colocado nada, isso é feito baseado no isCompleted */}
            <div className="content">
                <p>{todo.text}</p>
                <p className="category">({todo.categoria})</p>
              </div>
              <div>
                
                <button className='remove' onClick={() => removeTodo(todo.id)}>Deletar</button>
              </div>
            </div>
    )
}

export default Todo

