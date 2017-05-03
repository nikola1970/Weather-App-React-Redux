import React from "react";
import ReactDOM from "react-dom";
import WeatherApp from "./components/Wrapper.js"

import {Provider} from "react-redux";

const store = require("./store/store").configure();

require("bootstrap/dist/css/bootstrap.min.css");
require("./styles/styles.scss");


ReactDOM.render(
    <Provider store={store}>
        <WeatherApp/>
    </Provider>,
    document.getElementById("app")
);

