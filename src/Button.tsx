import React from "react";
import './Button.css'

type PropsCountType = {
    value : number
    add: () => void
    reset: () => void
}

export function Button(props: PropsCountType) {
    return (
        <div >
            <div className={"value"}>
                    <span>{props.value}</span>
            </div>
            <button onClick={props.add} disabled={props.value === 5}>Inc</button>
            <button onClick={props.reset} disabled={props.value === 0}> Reset</button>
        </div>

    )
}

