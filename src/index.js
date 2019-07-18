import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard/Dashboard';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import * as serviceWorker from './serviceWorker';

function App() {
    return (
        <div className="App">
            <DndProvider backend={HTML5Backend}>
                <Dashboard />
            </DndProvider>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import React from 'react'
// import ReactDOM from 'react-dom'
// import Example from './dnd/example'
// import { DndProvider } from 'react-dnd'
// import HTML5Backend from 'react-dnd-html5-backend'

// import * as serviceWorker from './serviceWorker';


// function App() {
//     return (
//         <div className="App">
//             <DndProvider backend={HTML5Backend}>
//                 <Example />
//             </DndProvider>
//         </div>
//     )
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)	

// serviceWorker.unregister();
