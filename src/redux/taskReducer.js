import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : {
    todolist: [],
    active_count: 0,
    filter_count: 1,
    clear_completed_opacity: true
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        ADD_TODO: (state, action) => {
            action.payload.replace(/\s+/g, " ").trim();
            if(!action.payload || action.payload === " ") return;
            let newId
            if(state.todolist.length === 0){
                newId = 1
            }
            else{newId = state.todolist[state.todolist.length-1].id+1;}
            state.active_count += 1
            state.todolist = [...state.todolist, {id: newId, text: action.payload, checked: false, inEdit: false}]
            localStorage.setItem('todo', JSON.stringify(state));
        },
        CHECK(state, action){
            state.todolist.forEach((item)=>{
                if (item.id === action.payload){
                    item.checked = !item.checked;
                    item.checked ? state.active_count -= 1 : state.active_count += 1
                }
            }) 
            localStorage.setItem('todo', JSON.stringify(state));
        },
        DELETE_TODO(state, action){
            state.todolist.forEach((item, index)=>{
                if (item.id === action.payload){
                    if(!item.checked){
                        state.active_count -= 1
                    }
                    state.todolist.splice(index, 1);
                }
            })
            localStorage.setItem('todo', JSON.stringify(state));
        },
        CHANGE_FILTER: (state, action) => {
            state.filter_count = action.payload
            localStorage.setItem('todo', JSON.stringify(state));
        },
        CLEAR_COMPLETED(state){
            let checkList = () =>{
                state.todolist.forEach((item)=>{
                    if(item.checked){
                        deleteItems();
                    }
                });
            }
            let deleteItems = () =>{
                state.todolist.forEach((item, index)=>{
                    if (item.checked)
                    {
                        state.todolist.splice(index, 1);
                        checkList();
                    }
                });
            }
            checkList();
            localStorage.setItem('todo', JSON.stringify(state));
        },
        TOGGLE_ALL(state){
            let nonchecked = 0;
            state.todolist.forEach((item)=>{
                if (!item.checked){
                    nonchecked+=1;
                }
            });
            if(nonchecked === 0){
                state.active_count = state.todolist.length - nonchecked;
                state.todolist.forEach((i)=>{
                    i.checked = !i.checked;
                });
            }
            else{
                state.active_count = 0;
                state.todolist.forEach((item)=>{
                    if (!item.checked){
                        item.checked = !item.checked;
                    }
                    
                });
            }
            localStorage.setItem('todo', JSON.stringify(state));
        },
        EDIT(state, action){
            state.todolist.forEach((item)=>{
                if (item.id === action.payload){
                    item.inEdit = !item.inEdit;
                }
            });
            localStorage.setItem('todo', JSON.stringify(state));
        },
        APPLY_EDIT(state, action){
            action.payload.text.replace(/\s+/g, " ").trim();
            state.todolist.forEach((item)=>{
                if (item.id === action.payload.ind){
                    if(!action.payload.text ){
                        item.inEdit = false;
                    }
                    else{
                        item.text = action.payload.text;
                        item.inEdit = false;
                    }
                    
                }
            });
            localStorage.setItem('todo', JSON.stringify(state));
        },
    },
})

export const {ADD_TODO, CHECK, DELETE_TODO, CHANGE_FILTER, CLEAR_COMPLETED, TOGGLE_ALL, EDIT, APPLY_EDIT} = taskSlice.actions

export default taskSlice.reducer