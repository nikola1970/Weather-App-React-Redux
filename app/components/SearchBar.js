import React, {Component} from "react";
import {connect} from "react-redux";
import {addCity} from "../actions";

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { city: "" };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onFormChange = this.onFormChange.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.dispatch(addCity(this.state.city));
        this.setState({
            city: ""
        })
    }

    onFormChange(e) {
        const newCity = e.target.value;
        this.setState({city: newCity});
    }

    render(){

        return(
            <div className="search-bar">
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <input type="text" value={this.state.city} className="form-control" onChange={this.onFormChange}/>
                        <button className="btn btn-primary">Add</button>
                    </div>
                </form>
            </div>
        );
    }

}

export default connect()(SearchBar);