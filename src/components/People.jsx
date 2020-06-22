import React, { Component } from "react";
import PersonCard from "./PersonCard";

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infoArr: [],
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then((res) => res.json())
        .then((objArr ) => {
            let newPersonArr = objArr.map((person) => (
                <PersonCard
                key={person.id}
                name={person.name}
                age={person.age}
                gender={person.gender}
                id={person.id}
                 />
            ));
            this.setState({ infoArr: newPersonArr });
        });
    }

    render() {
        return (
            <div>
                <h3>People</h3>
                <div className="container d-flex flexwrap">{this.state.infoArr}</div>
            </div>
        );
    }
}

export default People;