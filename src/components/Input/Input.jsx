const Input = (props) =>
{
    return(
        <input type="number" onChange={props.change} value={props.value}/>
    )
};

export default Input;