import { createStore, combineReducers} from "redux";
import taskReducer from './taskReducer';

let reducers = combineReducers({
    tasks:taskReducer
})

let store = createStore(reducers);

window.store = store;

export default store;