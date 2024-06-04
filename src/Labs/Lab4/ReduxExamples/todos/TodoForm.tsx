import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
    
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    
    return (
       
        <li className="list-group-item form-control">
            <input value={todo.title}
                   onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value })) }/>
    
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => dispatch(updateTodo(todo))}
                    className="btn btn-warning"
                    id="wd-update-todo-click"> Update </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => dispatch(addTodo(todo))}
                    className="btn btn-success"
                    id="wd-add-todo-click"> Add </button>
        </li>
    
    );
}
