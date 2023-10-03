import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from "react-dom/client";
import App from "./App";
import StoreContext from "./store-context";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            {/*<StoreContext.Provider value={store}>*/}
            <Provider store={store}>
                <App />
            </Provider>
            {/*</StoreContext.Provider>*/}
        </React.StrictMode>
    );
}

rerenderEntireTree();
store.subscribe(() => {
    rerenderEntireTree();
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
