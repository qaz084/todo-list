import { useForm } from "../../Hooks/useForm"


export const ToDoAdddForm = ({onNewTodo}) => {

   const{description,onInputChange,onResetForm}= useForm({
        description:'',
   });

   const onFormSubmit=(e)=>{

        e.preventDefault();
        if(description.length<=1)return;

        const newTodo={
            id: new Date().getTime()+1000,
            done:false,
            description:description,
        }

        onNewTodo(newTodo);
        onResetForm();
    
   }

  return (
    <form onSubmit={onFormSubmit} 
    className={'d-flex flex-column'} >
        <input type="text" 
            placeholder="Eg: buy some eggs..."
            className='form-control'
            name="description"
            value={description}
            onChange={onInputChange}
        />
        <button type="submit"
            className="btn btn-primary mt-2">
            Add
        </button>
    </form>
  )
}
