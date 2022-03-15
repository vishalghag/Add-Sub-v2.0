const Buttons = (props) =>
{
    return(
        <div>
        <button style={{backgroundColor: "blue", color:'white', fontSize:'25px', marginTop:'10px'}} onClick={props.add}>Add</button>
        <br/>
        <button style={{backgroundColor: "red", color:'white', fontSize:'25px', marginTop:'10px'}} onClick={props.sub}>Sub</button>
        </div>
    )
};

export default Buttons;