

export const ToDoItem = ({todo,onDeleteTodo,onToggleTodo}) => {
  return (
    <li  onClick={()=> onToggleTodo(todo.id)} className={`list-group-item d-flex justify-content-between ${(todo.done) ? 'text-decoration-line-through bg-success text-white':''}`}>
        <span className='align-self-center'
       >
        {todo.description}
        </span>

        <div>
          <button className="btn btn-danger"
          onClick={()=>onDeleteTodo(todo.id)}>Delete</button>
        </div>

    </li>
  )
}
