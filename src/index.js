import "@babel/polyfill";
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux"; 

import App from "./containers/App/App";
import store from "./store";

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    window.document.getElementById('root') || document.createElement('div') // For testing purposes
);