import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

/**
 * Creates and configures the Redux store for the application.
 *
 * @returns {object} The configured Redux store.
 */
const store = configureStore({
    reducer: rootReducer
});

export default store; 