import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

const PersonCard = (props) => {
    return (
        <div className="card mb-1 mr-1 p-0 col-2">
            <div className="card-header">{props.name}</div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Age: {props.age}</li>
                <li className="list-group-item">Gender: {props.gender}</li>
                <li className="list-group-item">
                    <button className="btnPrimary">
                        <Link to={`/People/${props.id}`}>Details</Link>
                    </button>
                </li>
            </ul>
        </div>
    );
}
export default PersonCard;