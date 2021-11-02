let Filter = (props) =>{
    return(
        <div className="filter" id="filter">
            <p id='active__count'>{props.active} items left</p>
            <p className={props.filter === 1 ? 'filter__link active' : 'filter__link'} onClick={()=> props.changeFilter(1)} id='1'>All</p>
            <p className={props.filter === 2 ? 'filter__link active' : 'filter__link'} onClick={()=> props.changeFilter(2)} id='2'>Active</p>
            <p className={props.filter === 3 ? 'filter__link active' : 'filter__link'} onClick={()=> props.changeFilter(3)}  id='3'>Completed</p>
            <p id="clear__completed" style={{opacity: props.clear}} onClick={props.clearButton}>Clear completed</p>
        </div>
    )
}

export default Filter