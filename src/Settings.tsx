import React, {useState} from "react";
import style from "./ButtonSet.module.css"
import {TValues} from "./App";

type SettingsPropsType = {
    initialValues: TValues
    usedValues: TValues
    setValues: (newValues: TValues) => void
}



export function Settings(props: SettingsPropsType) {
    const [maxInput, setMaxInput] = useState(props.initialValues.max)
    const [minInput, setMinInput] = useState(props.initialValues.min)
    const setValues = () => {
        const newValues: TValues = {min: minInput, max: maxInput}
        props.setValues(newValues)
    }
    return (
        <div className={style.settings}>
            <div className={style.inputs}>
                <div>max <input type={"number"} onChange={(event) => setMaxInput(Number(event.currentTarget.value))} value={maxInput} className={style.input}/></div>
                <div>min <input type={"number"} onChange={(event) => setMinInput(Number(event.currentTarget.value))} value={minInput} className={style.input}/></div>
            </div>
            <button onClick={setValues}> Set </button>
        </div>

    )
}

