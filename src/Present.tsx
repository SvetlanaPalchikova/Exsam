import React, {useState} from "react";
import './Button.css'
import {TValues} from "./App";

type TPresentPropsType = {
    change: () => void
    reset: () => void
    usedValues: TValues
    initialValues: TValues
}

export function Present(props: TPresentPropsType) {

    return (
        <div >
            <div className={"value"}>
                    <span className={props.usedValues.min === props.initialValues.max ? "error":""}>{props.usedValues.min}</span>
            </div>
            <button onClick={props.change} disabled={props.usedValues.min === props.initialValues.max}>Inc</button>
            <button onClick={props.reset} disabled={props.usedValues.min === props.initialValues.min}> Reset</button>
        </div>

    )
}

