

export const toDoReducer = (initialState,action) => {
    switch (action.type) {

        case '[ADD] Add Todo':
           return [...initialState,action.payload];

        case '[REMOVE] Remove Todo':
           return initialState.filter(todo => todo.id!==action.payload);

        case '[TOOGLE] Toggle Todo':
        
           return initialState.map(todo => {

           if (todo.id==action.payload){
                return {

                    ...todo,
                    done: !todo.done,
                }
           }
            return todo;
        
            });

            default:
                return initialState;

    }
}
