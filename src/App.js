import logo from './logo.svg';
import './App.css';
import TodolistContainer from './components/TodolistContainer';

let App = (props) => {
  return(
    <div className = 'Wrapper'>
      <TodolistContainer store = {props.store}/>
    </div>
  )
}

export default App;
