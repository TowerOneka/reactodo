import Filter from "./view/Filter";
import Input from './view/Input';
import Tasks from './view/tasks/Tasks';
import { addTodoAC, changeFilterAC, checkAC, deleteTodoAC, clearCompleteAC, toggleAllAC, editAC, applyEditAC } from './../redux/taskReducer';
import { useSelector, useDispatch } from "react-redux";


let TodolistContainer = (props) =>{
    const state = useSelector((state) => state.tasks);

    const dispatch = useDispatch();

    let check =(ind)=>{
        dispatch(checkAC(ind));
    }
    let deleteTodo = (ind) =>{
        dispatch(deleteTodoAC(ind))
    }
    let changeFilter = (ind) =>{
        dispatch(changeFilterAC(ind))
    }
    let clearButton = () =>{
        dispatch(clearCompleteAC())
    }
    let toggleAll = () =>{
        dispatch(toggleAllAC())
    }
    let edit = (ind) =>{
        dispatch(editAC(ind))
    }
    let applyEdit = (ind, text) =>{
        dispatch(applyEditAC(ind, text))
    }
    let submitForm = (text) =>{
        dispatch(addTodoAC(text));
    }


    let todos = [];
    
    if(state.filter_count === 2){
        state.todolist.forEach( todo => {
            if(todo.checked === false){
                todos.push({id: todo.id, text: todo.text, checked: todo.checked, inEdit: todo.inEdit})
            }
        })
    }
    else if(state.filter_count === 3){
        state.todolist.forEach( todo => {
            if(todo.checked){
                todos.push({id: todo.id, text: todo.text, checked: todo.checked, inEdit: todo.inEdit})
            }
        })
    }
    else{ 
        state.todolist.forEach( todo => {
                todos.push({id: todo.id, text: todo.text, checked: todo.checked, inEdit: todo.inEdit})
        })
     }
     

    
    return(
        <div className="container">
            <Input onSubmit = {submitForm} onToggleAll={toggleAll} toggleColor={state.active_count===0 & state.todolist.length > 0 ? '#26de81' : '#778ca3'}/>
            <Tasks todos={todos} onCheckAction={check} onDelete = {deleteTodo} onEdit={edit} onApplyEdit={applyEdit}/>
            <Filter active = {state.active_count} filter = {state.filter_count} changeFilter = {changeFilter} clear={state.todolist.length !== state.active_count ? 1 : 0} clearButton={clearButton}/>
        </div>
    );
    
}

export default TodolistContainer;