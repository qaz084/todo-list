import { useTodos } from "../Hooks/useTodos";
import { ToDoList } from "./Components";
import { ToDoAdddForm } from "./Components";
import './App.css'


export const ToDoApp = () => {

//CUSTOM HOOK USETODOS
 const{ todos,todosCount,pendingTodosCount,handleDeleteTodo,handleOnToggleTodo,handleNewToDo}=useTodos();

//------------------------------------

  return (
    <div className="app-container">
     <h1 className="align-self-start color-text">To-Do List 📝 </h1>
     <hr />
     <div className="d-flex flex-column flex-wrap justify-content-center p-2"  >
        
        <div className="d-flex flex-column flex-wrap p-2 mb-4" >
            <h4>Add To-do:</h4>
           
            <ToDoAdddForm onNewTodo={handleNewToDo}/>
        </div>
        
        <div >
          <div className='d-flex flex-row justify-content-between p-2'>
            <h5 >To-do: {todosCount}</h5>
            <h5 > Pending: {pendingTodosCount}</h5>
          </div>
         
          <ToDoList
            className={'bd-highlight'}
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleOnToggleTodo}
          />    
        </div>
     </div>
    
    </div>
  )
}
