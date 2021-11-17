import { useState } from "react";
import s from './Input.module.scss';

let Input = (props) =>{
    const[input, setInput] = useState('');
    const handleChange = e => setInput(e.target.value);
    let onSubmitForm = (e) =>{
        e.preventDefault(); 
        props.onSubmit(input); 
        setInput('');
    }

    return(
        <div className={s.form}>
            <div className={s.toggleAllButton}>
                <input style={{color: props.toggleColor}} type="button" id={s.toggleAll}  value="❯" onClick={props.onToggleAll}></input>
            </div>
            <form id={s.todo__form} onSubmit={onSubmitForm}>
                <input type="text" name="todo__text" id={s.todo__text} placeholder="What needs to be done?" value={input} onChange={handleChange}></input>
            </form>  
        </div>
    )
}

export default Input;