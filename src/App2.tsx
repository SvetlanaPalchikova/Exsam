import React from 'react';
import {ShowTeamName} from './nativ01'

type PropsType = {
    title: string
}
function  App(props: PropsType) {

return (
        <div className="App">
<h1>{props.title}</h1>
        </div>
    );
}

export default App;
