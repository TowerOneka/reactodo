import Filter from "./view/Filter";
import Input from './view/Input';
import React, { useState } from 'react';
import Tasks from './view/tasks/Tasks';
import Task from './view/tasks/Task';
import { addTodoAC, changeFilterAC, checkAC, deleteTodoAC, clearCompleteAC, toggleAllAC, editAC, applyEditAC } from './../redux/taskReducer';



let TodolistContainer = (props) =>{
    let state = props.store.getState().tasks;

    let check =(ind)=>{
        props.store.dispatch(checkAC(ind));
        changeTasks();
    }
    let deleteTodo = (ind) =>{
        props.store.dispatch(deleteTodoAC(ind))
        changeTasks();
    }
    let changeFilter = (ind) =>{
        props.store.dispatch(changeFilterAC(ind))
        changeTasks();
    }
    let clearButton = () =>{
        props.store.dispatch(clearCompleteAC())
        changeTasks();
    }
    let toggleAll = () =>{
        props.store.dispatch(toggleAllAC())
        changeTasks();
    }
    let edit = (ind) =>{
        props.store.dispatch(editAC(ind))
        changeTasks();
    }
    let applyEdit = (ind, text) =>{
        props.store.dispatch(applyEditAC(ind, text))
        changeTasks();
    }

    const [todos, setTodos] = useState(state.todolist.map( todo => <Task key={todo.id} id={todo.id} text={todo.text} checked={todo.checked} editing={todo.inEdit} checkAction = {check} deleteAction = {deleteTodo} edit={edit} apply={applyEdit}/>))
    
    let submitForm = (text) =>{
        props.store.dispatch(addTodoAC(text));
        changeTasks();
    }



    let changeTasks = () =>{
        let active__filter = state.filter_count;
        if(active__filter === 2){
            setTodos(state.todolist.map( (todo) => {
                if(todo.checked){
                    <Task key={todo.id} id={todo.id} text={todo.text} checked={todo.checked} editing={todo.inEdit} checkAction = {check} deleteAction = {deleteTodo} edit={edit} apply={applyEdit}/>
                }
            }))
        }
        if(active__filter === 3){
            setTodos(state.todolist.map( (todo) => {
                if(!todo.checked){
                    <Task key={todo.id} id={todo.id} text={todo.text} checked={todo.checked} editing={todo.inEdit} checkAction = {check} deleteAction = {deleteTodo} edit={edit} apply={applyEdit}/>
                }
            }))
        }
        else{ setTodos(state.todolist.map( todo => <Task key={todo.id} id={todo.id} text={todo.text} checked={todo.checked} editing={todo.inEdit} checkAction = {check} deleteAction = {deleteTodo} edit={edit} apply={applyEdit}/>)) }
    }
    
    return(
        <div className="container">
            <Input submit = {submitForm} toggleAll={toggleAll} toggleColor={state.active_count===0 & state.todolist.length > 0 ? '#26de81' : '#778ca3'}/>
            <Tasks todos={todos}/>
            <Filter active = {state.active_count} filter = {state.filter_count} changeFilter = {changeFilter} clear={state.todolist.length !== state.active_count ? 1 : 0} clearButton={clearButton}/>
        </div>
    );
    
}

export default TodolistContainer;