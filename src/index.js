// Timecode : 1:27:20
import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
    return (
        <div>
            <Person/>
            <Message/>
        </div>
    );
}
const Person = () => <h2>john doe</h2>;
const Message = () => {
    return <p>this is my message</p>;
};

// function Greeting() {
//     return React.createElement('h2',{}, 'hello world');
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting/>);
