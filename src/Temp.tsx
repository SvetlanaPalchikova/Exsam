import React, {useEffect, useState} from 'react';
import style from './App.module.css';


function Temp() {

    const [value, setValue] = useState<number>(0)

    useEffect(() => {
        let valueAsString = localStorage.getItem("keyValue")
        if (valueAsString){
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])

    useEffect(() =>{
        localStorage.setItem("keyValue", JSON.stringify(value))
    }, [value])

    const incHandler = () => {
        setValue(value + 1)
    }

    return (
        <div className={style.temp}>
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
        </div>
    );
};

export default Temp;