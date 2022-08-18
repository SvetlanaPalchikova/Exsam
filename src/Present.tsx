import React, {useState} from "react";
import style from './Present.module.css'
import {TValues} from "./App";



type TPresentPropsType = {
    change: () => void
    reset: () => void
    usedValues: TValues
    initialValues: TValues

}

export function Present(props: TPresentPropsType) {

    return (
        <div>
            <div className={style.value}>

                <span className={props.usedValues.min === props.initialValues.max ? style.error:""}>
                    {props.initialValues.min >= props.initialValues.max ||
                    props.initialValues.min < 0 ? <p className={style.textError}>Incorrect value!</p>:props.usedValues.min}
                </span>
            </div>
            <button onClick={props.change} disabled={props.usedValues.min === props.initialValues.max}>Inc</button>
            <button onClick={props.reset} disabled={props.usedValues.min === props.initialValues.min}> Reset</button>
        </div>

    )
}

