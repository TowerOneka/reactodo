import s from './Filter.module.scss';


let Filter = (props) =>{
    return(
        <div className={s.filter}>
            <p id={s.active__count}>{props.active} items left</p>
            <p className={`${s.filter__link} ${props.filter === 1 ?  s.active : ''}`} onClick={()=> props.changeFilter(1)}>All</p>
            <p className={`${s.filter__link} ${props.filter === 2 ?  s.active : ''}`} onClick={()=> props.changeFilter(2)}>Active</p>
            <p className={`${s.filter__link} ${props.filter === 3 ?  s.active : ''}`} onClick={()=> props.changeFilter(3)}>Completed</p>
            <p id={s.clear__completed} style={{opacity: props.clear}} onClick={props.clearButton}>Clear completed</p>
        </div>
    )
}

export default Filter