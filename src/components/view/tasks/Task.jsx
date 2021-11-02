import { useState } from "react";



let Task = (props) =>{
    const[input, setInput] = useState(props.text);
    const handleChange = e => setInput(e.target.value);
    return(
        <li id={props.id} className ='items'>
            <input type="checkbox" className="checkbox" onChange={()=>props.checkAction(props.id, props.checked)} checked={props.checked ? 'checked' : ''}></input>
            {props.editing ? <input className="edit" autoFocus onChange={handleChange} onBlur={()=>props.apply(props.id, input)} onKeyUp={(e)=>{if (e.key === 'Enter'){props.apply(props.id, input)}; if (e.key === "Escape"){props.edit(props.id); setInput(props.text)}}} value={input}></input> : <label className="label" onDoubleClick={()=>props.edit(props.id)}>{props.text}</label>}
            <button id='todo__remove' onClick={()=>props.deleteAction(props.id, props.checked)}>X</button>
        </li>
    );
}

export default Task;