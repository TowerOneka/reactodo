import s from './Filter.module.scss';


let Filter = (props) =>{
    let handleChangeFilter = (e) =>{
        props.onChangeFilter(Number(e.target.dataset.filter))
    }
    return(
        <div className={s.filter}>
            <p id={s.active__count}>{props.active} items left</p>
            <p className={`${s.filter__link} ${props.filter === 1 ?  s.active : ''}`} data-filter='1' onClick={handleChangeFilter}>All</p>
            <p className={`${s.filter__link} ${props.filter === 2 ?  s.active : ''}`} data-filter='2' onClick={handleChangeFilter}>Active</p>
            <p className={`${s.filter__link} ${props.filter === 3 ?  s.active : ''}`} data-filter='3' onClick={handleChangeFilter}>Completed</p>
            <p id={s.clear__completed} style={{opacity: props.clear}} onClick={props.clearButton}>Clear completed</p>
        </div>
    )
}

export default Filter