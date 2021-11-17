import React, {useCallback} from 'react';
import Filter from "./Filter";
import Input from './Input';
import Tasks from './view/Tasks/Tasks';
import { CHECK, DELETE_TODO, CHANGE_FILTER, CLEAR_COMPLETED, TOGGLE_ALL, EDIT, APPLY_EDIT, ADD_TODO } from './../redux/taskReducer';
import { useSelector, useDispatch } from "react-redux";
import { filterSelector, tasksSelector, activeSelector, secondFilter, thirdFilter } from './../redux/selectors';


let TodolistContainer = () =>{
    const dispatch = useDispatch();
    const tasks = useSelector(tasksSelector);
    const sec_filt = useSelector(secondFilter);
    const thr_filt = useSelector(thirdFilter);
    const filter_count = useSelector(filterSelector);
    const active_count = useSelector(activeSelector);
    let handleCheck = useCallback(
        (ind) =>{
            dispatch(CHECK(ind));
        }, [dispatch],
    )
    let handleDeleteTodo = useCallback(
        (ind) =>{
            dispatch(DELETE_TODO(ind));
        }, [dispatch],
    )
    let handleChangeFilter = useCallback(
        (ind) =>{
            dispatch(CHANGE_FILTER(ind));
        }, [dispatch],
    )
    let handleClearButton = useCallback(
        (ind) =>{
            dispatch(CLEAR_COMPLETED(ind));
        }, [dispatch],
    )
    let handleToggleAll = useCallback(
        (ind) =>{
            dispatch(TOGGLE_ALL(ind));
        }, [dispatch],
    )
    let handleEdit = useCallback(
        (ind) =>{
            dispatch(EDIT(ind));
        }, [dispatch],
    )
    let handleApplyEdit = useCallback(
        (ind, text) =>{
            dispatch(APPLY_EDIT({ind: ind, text: text }));
        }, [dispatch],
    )
    let handleSubmitForm = useCallback(
        (text) =>{
            console.log('callback done');
            dispatch(ADD_TODO(text));
        }, [dispatch],
    )
    let todos;
    if(filter_count === 2){
        todos = sec_filt;
    }
    else if(filter_count === 3){
        todos = thr_filt;
    }
    else{ 
        todos = tasks;
     }
     

    
    return(
        <div className="container">
            <Input onSubmit = {handleSubmitForm} onToggleAll={handleToggleAll} toggleColor={active_count===0 & tasks.length > 0 ? '#26de81' : '#778ca3'}/>
            <Tasks todos={todos} onCheckAction={handleCheck} onDelete = {handleDeleteTodo} onEdit={handleEdit} onApplyEdit={handleApplyEdit}/>
            <Filter active = {active_count} filter = {filter_count} onChangeFilter = {handleChangeFilter} clear={tasks.length !== active_count ? 1 : 0} clearButton={handleClearButton}/>
        </div>
    );
    
}

export default TodolistContainer;