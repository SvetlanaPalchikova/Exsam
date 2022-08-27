import React, {useEffect, useState} from 'react';
import style from './App.module.css';
import {Present} from "./Present";
import {Settings} from "./Settings";

export type TValues = {
    min: number
    max: number
}

function App() {
    const [initialValues, setInitialValues] = useState<TValues>({min: 0, max: 5})

    useEffect(() => {
        let initialValueAsString = localStorage.getItem('InitialValue')
        if(initialValueAsString) {
            let newInitialValue = JSON.parse(initialValueAsString)
            setInitialValues(newInitialValue)
        }
    }, [])

    useEffect( () => {
        localStorage.setItem('InitialValue', JSON.stringify(initialValues))
    }, [initialValues])

    const [usedValues, setUsedValues] = useState<TValues>({min: 0, max: 5})

    useEffect(() => {
        let usedValuesFromLocalStorage = localStorage.getItem('usedValues')
        if (usedValuesFromLocalStorage) {
           setUsedValues(JSON.parse(usedValuesFromLocalStorage))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('usedValues', JSON.stringify(usedValues))
    }, [usedValues])

    const changeCounter = () => {
        const newCount = usedValues.min + 1
        setUsedValues({...usedValues, min: newCount})
    }

    const resetCounter = () => {
        setUsedValues(initialValues)
    }

    const setValues = (values: TValues) => {
        setInitialValues(values)
        setUsedValues(values)
    }

    return (
        <div className={style.container}>
            <div><Settings
                setValues={setValues}
                initialValues={initialValues}
                usedValues={usedValues}/></div>
            <div><Present
                change={changeCounter}
                reset={resetCounter}
                initialValues={initialValues}
                usedValues={usedValues}
            /></div>
        </div>


    )

}

export default App;
