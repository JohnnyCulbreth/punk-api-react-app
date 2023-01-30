import React from "react";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function BeerCard(props) {
    return (
        <li style={{ listStyle: "none" }}>
            <img src={props.image_url}></img>
            <div className="content">
                <h3>{props.name} <span>{" EST. " + props.first_brewed}</span></h3>
                <h4 className="tagline">{props.tagline}</h4>
                <p className="description"><span>{props.abv + "% ABV "}</span>{"- " + props.description}</p>
                <div className="heart"><AiOutlineHeart /></div>
            </div>
        </li>
    )
}

export default BeerCard