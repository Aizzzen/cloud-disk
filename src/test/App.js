import React from 'react';
import {Provider} from "react-redux";
import {store} from "../store/store";
import {BrowserRouter as Router} from "react-router-dom";
import App from "../App";

const App = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        </React.StrictMode>
    );
};

export default App;
