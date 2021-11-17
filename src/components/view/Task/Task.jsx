import { useState } from "react";
import s from '../Tasks.module.scss'
import React from 'react';


let Task = (props) =>{
    let handleApply = e =>{
        if (e.key === 'Enter'){
            props.onApply(props.id, input)
        }
        else if (e.key === "Escape"){
            props.onEdit(props.id); setInput(props.text)
        }
    }
    let handleCheck = () =>{
        props.onCheckAction(props.id, props.checked)
    }
    let handleDelete = () =>{
        props.onDelete(props.id, props.checked)
    }
    let handleEdit = () =>{
        props.onEdit(props.id)
    }
    let handleSecApply = () =>{
        props.onApply(props.id, input)
    }


    const[input, setInput] = useState(props.text);
    const handleChange = e => setInput(e.target.value);
    return(
        <li id={props.id} className ={s.items}>
            <input type="checkbox" className={s.checkbox} onChange={handleCheck} checked={props.checked ? 'checked' : ''}></input>
            {props.inEdit ? <input className={s.edit} autoFocus onChange={handleChange} onBlur={handleSecApply} onKeyUp={handleApply} value={input}></input> : <label className={s.label} onDoubleClick={handleEdit}>{props.text}</label>}
            <button id={s.todo__remove} onClick={handleDelete}>X</button>
        </li>
    );
}

export default React.memo(Task);