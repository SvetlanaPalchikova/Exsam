import React from "react";
import style from "./ButtonSet.module.css"

type PropsCountType = {

}

export function ButtonSet(props: PropsCountType) {
    return (
        <div className={style.settings}>
            <div className={style.inputs}>
                <div >max <input className={style.input}/></div>
                <div >min <input className={style.input}/></div>
            </div>
            <button> Set </button>
        </div>

    )
}

