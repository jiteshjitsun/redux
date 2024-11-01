import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";


// function Hi() {
    // debugger; // eslint-disable-line no-debugger

    // const HelloWorld = React.createClass({
    //     render() {
    //         return <h1>Hello World</h1>;
    //     }
    // });
    
//     return <h1>Hi {globarVar}</h1>;
// }

const rootElement = document.getElementById("app");
createRoot(rootElement).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
