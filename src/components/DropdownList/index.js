import './DropDownList.css';

const DropDownList = (props) => {

    return(
        <div className='dropdown-list'>
            <label>{props.label}</label>
            <select onChange={e => props.onAlter(e.target.value)}>
                {props.items.map((item) => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropDownList;