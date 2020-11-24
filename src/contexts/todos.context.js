import React, { createContext } from 'react';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer'
import todosReducer from '../ruducers/todo.reducer';

const defaultTodos = [
    { id: 1, task: "Mow the lawn using goats", completed: false },
    { id: 2, task: "Release ladybugs into the garden", completed: false }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props){
   const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todosReducer)
   return (
       <TodosContext.Provider value={todos}>
           <DispatchContext.Provider value={dispatch}>
                {props.children}
           </DispatchContext.Provider>
       </TodosContext.Provider>
   )
}