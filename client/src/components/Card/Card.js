import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card" onClick={() => props.click(props.id)}> 
        <div className="content">
            <ul>
                <li>
                    <strong>Name:</strong> {props.name}
                </li>
                <li>
                    <strong>Position:</strong> {props.position}
                </li>
                <li>
                    <strong>Number:</strong> {props.number}
                </li>
            </ul>
        </div>
    </div>  
)

export default Card;