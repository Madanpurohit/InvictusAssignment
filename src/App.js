import React from 'react'
import Fetch from './Fetch';
import './App.css';

function App() {
    return ( <
        div className = "App" >
        <
        div > < input id = "inp" / >
        <
        button type = "submit"
        onClick = { Fetch } > SUBMIT < /button> <
        /div> <
        div id = "result" > < /div> <
        /div>
    );
}

export default App;