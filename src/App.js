import React, { Component } from "react";
import axios from "axios";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import './App.css';

import BeerCard from "./BeerCard";

class App extends Component{
  constructor() {
    super()

    this.state={
      arrayOfBeer: [],
      isClicked: true,
      isLiked: []
    }
  }

  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers')
      .then( res => {
        const arrayOfBeer = res.data
        this.setState({ arrayOfBeer })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ol>{this.state.arrayOfBeer.map((beer, index) => {
          return (
            <BeerCard key={index}
            name={beer.name}
            image_url={beer.image_url}
            first_brewed={beer.first_brewed}
            tagline={beer.tagline}
            abv={beer.abv}
            description={beer.description}
            handleLike={this.handleLike} />
          )
        })}</ol>
        </header>
      </div>
    )
  }
}

export default App;
