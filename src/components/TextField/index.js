import "./TextField.css";

const TextField = (props) => {

    const onPress = (e) => {
        props.onAlter(e.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} placeholder={props.placeholder} onChange={onPress} />
        </div>
    )
}

export default TextField;