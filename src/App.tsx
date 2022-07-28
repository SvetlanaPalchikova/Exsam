import React, {useState} from 'react';
import './Button.css';
import {Present} from "./Present";
import {Settings} from "./Settings";

 export type TValues = {
    min: number
    max: number
}

function App() {
    const [initialValues, setInitialValues] = useState<TValues>({min: 0, max: 5})
    const [usedValues, setUsedValues] = useState<TValues>({min: 0, max: 5})

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
        <div className={"button"}>

            <div>
                <Settings
                    setValues={setValues}
                    initialValues={initialValues}
                    usedValues={usedValues}/>
                <Present
                    change={changeCounter}
                    reset={resetCounter}
                    initialValues={initialValues}
                    usedValues={usedValues}
                />
            </div>
        </div>

    )

}

export default App;
