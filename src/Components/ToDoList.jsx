import { ToDoItem } from './'

export const ToDoList = ({todos=[],onDeleteTodo,onToggleTodo}) => {

  return (
    <ul className="list-group">

        {
            todos.map(todo =>{
              return(
                <>

                  <small >(Click to mark as completed)</small>
                  <ToDoItem className="mb-3" 
                  key={todo.id} todo={todo} 
                  onDeleteTodo={onDeleteTodo}
                  onToggleTodo={onToggleTodo}
                  />
                </>
              )

            }

    
            )
        }
           
    </ul>
  )
}
