let initialState = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : {
    todolist: [],
    active_count: 0,
    filter_count: 1,
    clear_completed_opacity: true
}

const taskReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD-TODO":
            action.text.replace(/\s+/g, " ").trim();
            if(!action.text || action.text === " ") return state;
            let newId
            if(state.todolist.length === 0){
                newId = 1
            }
            else{newId = state.todolist[state.todolist.length-1].id+1;}
            state.active_count += 1
            state.todolist = [...state.todolist, {id: newId, text: action.text, checked: false, inEdit: false}]
            localStorage.setItem('todo', JSON.stringify(state));
            return{ ...state};
        case "CHECK":
            state.todolist.forEach((item)=>{
                if (item.id === action.ind){
                    item.checked = !item.checked;
                    item.checked ? state.active_count -= 1 : state.active_count += 1
                }
            }) 
            localStorage.setItem('todo', JSON.stringify(state));

            return{ ...state};
        case "DELETE-TODO":
            state.todolist.forEach((item, index)=>{
                if (item.id === action.ind){
                    if(!item.checked){
                        state.active_count -= 1
                    }
                    state.todolist.splice(index, 1);
                }
            })
            localStorage.setItem('todo', JSON.stringify(state));
            return {...state};
        case "CHANGE-FILTER":
            state.filter_count = action.ind
            localStorage.setItem('todo', JSON.stringify(state));
            return {...state}
        case "CLEAR-COMPLETED":
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
            return {...state}
        case "TOGGLE-ALL":
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
            return{...state}
        case "EDIT":
            state.todolist.forEach((item)=>{
                if (item.id === action.ind){
                    item.inEdit = !item.inEdit;
                }
            });
            localStorage.setItem('todo', JSON.stringify(state));
            return{...state}
        case "APPLY-EDIT":
            action.text.replace(/\s+/g, " ").trim();
            state.todolist.forEach((item)=>{
                if (item.id === action.ind){
                    if(!action.text ){
                        item.inEdit = false;
                    }
                    else{
                        item.text = action.text;
                        item.inEdit = false;
                    }
                    
                }
            });
            localStorage.setItem('todo', JSON.stringify(state));
            return{...state}
        default:
            return state;
        
    }
}

export const addTodoAC = (text) =>({type: "ADD-TODO", text});
export const checkAC = (ind) =>({type: "CHECK", ind});
export const deleteTodoAC = (ind) =>({type: "DELETE-TODO", ind});
export const changeFilterAC = (ind) =>({type: "CHANGE-FILTER", ind});
export const clearCompleteAC = () =>({type: "CLEAR-COMPLETED"});
export const toggleAllAC = () =>({type: "TOGGLE-ALL"});
export const editAC = (ind) =>({type: "EDIT", ind});
export const applyEditAC = (ind, text) => ({type: "APPLY-EDIT", ind, text});

export default taskReducer;