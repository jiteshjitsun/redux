import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/configureStore.dev";
import { Provider } from "react-redux";

// function Hi() {
    // debugger; // eslint-disable-line no-debugger

    // const HelloWorld = React.createClass({
    //     render() {
    //         return <h1>Hello World</h1>;
    //     }
    // });
    
//     return <h1>Hi {globarVar}</h1>;
// }

/**
 * Renders the main React application with the Redux store and browser router.
 * This is the entry point of the application, where the root component is rendered.
 */
const rootElement = document.getElementById("app");
createRoot(rootElement).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
