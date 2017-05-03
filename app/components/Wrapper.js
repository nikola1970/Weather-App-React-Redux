import React, {Component} from "react";
import SearchBar from "./SearchBar";
import CityList from "./CityList";

export default class WeatherApp extends Component {
    render(){
        return(
            <div className="weather-app">
                <SearchBar/>
                <CityList/>
            </div>
        );
    }
}

