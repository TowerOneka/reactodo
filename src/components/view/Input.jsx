import { useState } from "react";

let Input = (props) =>{
    const[input, setInput] = useState('');
    const handleChange = e => setInput(e.target.value);

    return(
        <div className="form">
            <div className="toggle-all-button">
                <input style={{color: props.toggleColor}} type="button" id="toggle-all"  value="❯" onClick={props.toggleAll}></input>
            </div>
            <form id="todo__form" onSubmit={(e)=> {e.preventDefault(); props.submit(input); setInput('')}}>
                <input type="text" name="todo__text" id="todo__text" placeholder="What needs to be done?" value={input} onChange={handleChange}></input>
            </form>  
        </div>
    )
}

export default Input;