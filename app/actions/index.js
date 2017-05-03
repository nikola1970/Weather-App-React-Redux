import axios from "axios";

export const ADD_CITY = "ADD_CITY";


const URL = "http://api.openweathermap.org/data/2.5/forecast?q=";
const API_KEY = "&APPID=397843cb2d3cbe8f748d85fd572da092&units=metric";


export let addCity = city => {
    const request = axios.get(`${URL}${city}${API_KEY}`);
    return {
        type: ADD_CITY,
        payload: request
    }
};