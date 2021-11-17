import Task from '../Task';
import React from 'react';
import s from '../Tasks.module.scss'

let Tasks = (props) =>{
    return(
        <ul id={s.todo__list}>
            {props.todos.map(todo=> <Task key={todo.id} id={todo.id} text={todo.text} checked={todo.checked} inEdit={todo.inEdit} onDelete={props.onDelete} onCheckAction={props.onCheckAction} onApply={props.onApplyEdit} onEdit={props.onEdit}/>)}
        </ul>
    )
}

export default Tasks;