import React, {useState} from 'react';
import style from './App.module.css';


const Temp = () => {

    const [value, setValue] = useState<number>(0)
    const incHandler = () => {
        setValue(value + 1)

    }
    const setToLocalStorageHandler = () =>{
        localStorage.setItem("keyValue", JSON.stringify(value))
    }

    const getToLocalStorageHandler = () => {
     let valueAsString = localStorage.getItem("keyValue")
        if (valueAsString){
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }
    return (
        <div className={style.temp}>
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
            <button onClick={getToLocalStorageHandler}>getToLocalStorage</button>
        </div>
    );
};

export default Temp;