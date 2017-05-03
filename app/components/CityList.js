import React, {Component} from "react";
import {connect} from "react-redux";

const CityList = props => {
  return(
      <table>
          <thead>
            <tr>
                <th>City:</th>
                <th>Temperature:</th>
                <th>Humidity:</th>
                <th>Pressure:</th>
            </tr>
          </thead>
          <tbody>
            {props.list.map((city, index) => {
                return (
                  <tr key={index}>
                      <td>{city.city.name}</td>
                      <td>{city.list[0].main.temp}</td>
                      <td>{city.list[0].main.humidity}</td>
                      <td>{city.list[0].main.pressure}</td>
                  </tr>
                );
            })}
          </tbody>
      </table>
  );
};

export default connect(state => {
    return {
        list: state.cities
    };
})(CityList);