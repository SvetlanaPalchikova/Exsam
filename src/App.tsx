import React, {useState} from 'react';
import './Button.css';
import {Button} from "./Button";


function App() {

    const [value, setValue] = useState<number>(0)
function addCounter(){
        if (value<=4)
            setValue(value+1)}

function resetCounter() {
    setValue( 0)
}
    return (
        <div className={"button"}>
            <div>
            <Button
                value={value}
                add={addCounter}
                reset={resetCounter}
                />
            </div>
        </div>

    )

}

export default App;
