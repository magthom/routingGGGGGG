import React, { Component } from "react";

class FilmPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            film: [],
        };
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.state.id}`)
        .then((res) => res.json())
        .then((obj) => {
            this.setState({ film: obj });
        });
    }

    render() {
        return (
            <div>
                <h4>Title: {this.state.film.title}</h4>
                <h4>Release Year: {this.state.film.release_date}</h4>
                <h4>Director: {this.state.film.director}</h4>
                <h4>Producer: {this.state.film.producer}</h4>
                <h5>Description: {this.state.film.description}</h5>
            </div>
        );
    }
}

export default FilmPage;