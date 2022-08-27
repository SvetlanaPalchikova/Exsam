import React, {useEffect, useState} from "react";
import style from "./Setting.module.css"
import {TValues} from "./App";

type SettingsPropsType = {
    initialValues: TValues
    usedValues: TValues
    setValues: (newValues: TValues) => void
}

export function Settings(props: SettingsPropsType) {
    const [maxInput, setMaxInput] = useState(props.initialValues.max)

    useEffect(() => {
    let maxInputAsString = localStorage.getItem('maxInput')
        if(maxInputAsString) {
            let newMaxInputValue = JSON.parse(maxInputAsString)
            setMaxInput(newMaxInputValue)
        }
    }, [])

    useEffect( () => {
    localStorage.setItem('maxInput', JSON.stringify(maxInput))
    }, [maxInput])

    const [minInput, setMinInput] = useState(props.initialValues.min)

    useEffect(() => {
        let minInputAsString = localStorage.getItem('minInput')
        if(minInputAsString) {
            let newMinInputValue = JSON.parse(minInputAsString)
            setMinInput(newMinInputValue)
        }
    }, [])

    useEffect( () => {
        localStorage.setItem('minInput', JSON.stringify(minInput))
    }, [minInput])

    const setValues = () => {
        const newValues: TValues = {min: minInput, max: maxInput}
        props.setValues(newValues)
    }
    return (
        <div className={style.settings}>
            <div className={style.inputs}>
                <div>max <input type={"number"}
                                onChange={(event) => setMaxInput(Number(event.currentTarget.value))}
                                value={maxInput}
                                className={props.initialValues.min >= props.initialValues.max ||
                                props.initialValues.max < 0 ? style.error_input : style.input}/>
                </div>
                <div>min <input type={"number"}
                                onChange={(event) => setMinInput(Number(event.currentTarget.value))}
                                value={minInput}
                                className={props.initialValues.min === props.initialValues.max ||
                                props.initialValues.min < 0 ? style.error_input : style.input}/>
                </div>
            </div>
            <button onClick={setValues}> Set</button>
        </div>

    )
}

