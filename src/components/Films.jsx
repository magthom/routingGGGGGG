import React, { Component } from "react";
import FilmCard from "./FilmCard";

class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infoArr: [],
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then((res) => res.json())
        .then((objArr) => {
            let newFilmArr = objArr.map((films) => (
            <FilmCard
            key={films.id}
            title={films.title}
            descr={films.description}
            id={films.id}
            obj={films}
            />
            ));
            this.setState({ infoArr: newFilmArr });
        });
    }
    render() {
        return (
            <div>
                <h3>Films</h3>
                <div className="container">{this.state.infoArr}</div>
            </div>
        );
    }
}

export default Films;