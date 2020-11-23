import React, { createContext, useReducer } from 'react';
import useTodoState from '../hooks/useTodoState';
import todosReducer from '../ruducers/todo.reducer';

const defaultTodos = [
    { id: 1, task: "Mow the lawn using goats", completed: false },
    { id: 2, task: "Release ladybugs into the garden", completed: false }
];

export const TodosContext = createContext();

export function TodosProvider(props){
   const [todos, dispatch] = useReducer(todosReducer, defaultTodos);
   return (
       <TodosContext.Provider value={{ todos, dispatch }}>
           {props.children}
       </TodosContext.Provider>
   )
}