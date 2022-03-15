import Buttons from "../Buttons/Buttons";
import Input from "../Input/Input";
import Result from "../Result/Result";
import {useState} from "react";
import styles from "./InputButton.module.css"

const InputButton = () =>
{
    const [num, setNum] = useState()

    const [data,setData] = useState(0)

    const changeHandlter = (e) =>{
        const values = (+e.target.value);
        setNum(values)
    }

    const addHandler = () =>{
        setData(data+num);
        setNum('');
        // setData('');
    }

    const subHandler = () =>
    {
        setData(data-num);
        setNum('');
    }

    return(
        <div className={styles.container}>
            <h2>Add & Sub</h2>
            <Input change={changeHandlter} value={num}/>
            <Buttons add={addHandler}
                sub={subHandler}
            />
            <Result nums={data}/>
        </div>
    )
};

export default InputButton;