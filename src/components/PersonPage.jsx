import React, { Component } from "react";

class PersonPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            person: {},
            films: "",
        };
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people/${this.state.id}`)
        .then((res) => res.json())
        .then((obj) => {
            console.log(obj);
            this.setState({ person: obj });
            fetch(`${obj.films[0]}`)
            .then((res) => res.json())
            .then((obj) => {
                this.setState({ films: obj.title });
            });
        });
    }

    render() {
        return (
            <div>
                <h4>Name: {this.state.person.name}</h4>
                <h4>Age: {this.state.person.age}</h4>
                <h4>Eye Color: {this.state.person.eye_color}</h4>
                <h4>Gender: {this.state.person.gender}</h4>
                <h4>Hair Color: {this.state.person.hair_color}</h4>
                <h4>Appears In: {this.state.films}</h4>
            </div>
        );
    }
}
 export default PersonPage;