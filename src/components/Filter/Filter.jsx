import s from './Filter.module.scss';


let Filter = (props) =>{
    let handleChangeFilter = (e) =>{
        props.onChangeFilter(e.target.dataset.filter)
    }
    return(
        <div className={s.filter}>
            <p id={s.active__count}>{props.active} items left</p>
            <p className={`${s.filter__link} ${props.filter === 'All' ?  s.active : ''}`} data-filter='All' onClick={handleChangeFilter}>All</p>
            <p className={`${s.filter__link} ${props.filter === 'Active' ?  s.active : ''}`} data-filter='Active' onClick={handleChangeFilter}>Active</p>
            <p className={`${s.filter__link} ${props.filter === 'Completed' ?  s.active : ''}`} data-filter='Completed' onClick={handleChangeFilter}>Completed</p>
            <p id={s.clear__completed} style={{opacity: props.clear}} onClick={props.clearButton}>Clear completed</p>
        </div>
    )
}

export default Filter