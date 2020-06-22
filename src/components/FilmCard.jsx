import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

const FilmCard = (props) => {
    return (
        <div className="card bg-light mb-3">
            <div className="card-header"> {props.title}</div>
            <div className="card-body">
                <p className="card-text">{props.descr}</p>
                <button className="btnPrimary">
                <Link to={`/Films/${props.id}`}>Details</Link>
            </button>
            </div>
        </div>
    );
}

export default FilmCard;