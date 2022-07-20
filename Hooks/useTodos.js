import { useEffect, useReducer } from "react";
import { toDoReducer } from "../src/helpers/toDoReducer";


export const useTodos = () => {

//INIT FUNCTION TO SET THE REDUCER INITIAL STATE

const init=()=>{
const parsedTodos=JSON.parse(localStorage.getItem('todos'))|| [];
  return parsedTodos;
}

//USE REDUCER-------------------
const [todos, dispatchTodo] = useReducer(toDoReducer, [],init);

const stringTodos= JSON.stringify(todos);

//USE EFFECT---------------

useEffect(()=>{
    localStorage.setItem("todos",stringTodos);

  },[todos])

  //-----------------------------   

//HANDLE ADD TODO
const handleNewToDo = (todo) => {

    const action={

      type:'[ADD] Add Todo',
      payload:todo,
    }
    dispatchTodo(action);
};

//------------------------------------
//HANDLE DELETE TODO

const handleDeleteTodo=(id)=>{
    dispatchTodo({

      type:'[REMOVE] Remove Todo',
      payload:id,

    });
  };
//---------------------------------------
//HANDLE TOGGLE TODO

const handleOnToggleTodo=(id)=>{
    dispatchTodo({

      type:'[TOOGLE] Toggle Todo',
      payload:id,

    });
  };
//---------------------------------------

//HANDLE TOGGLE TODO

const pendingTodosCount=()=>(
    todos.filter(todo=>!todo.done).length
);
//---------------------------------------
  return {
    todos,
    handleDeleteTodo,
    handleOnToggleTodo,
    handleNewToDo,
    todosCount:todos.length,
    pendingTodosCount:pendingTodosCount(),
  }
}
