import React, { Component } from 'react'

import Card from '../components/Card'

class Popular extends Component {
  constructor() {
    super()

    this.state = {
      movie: []
    }
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f")
      .then(response => response.json()) // on transforme la donnée reçue en JSON 
      .then(result => { this.setState({movie: result.results}) }) // on détaille l'action à exécuter sur ce JSON
  }

  render() {
    // console.log(this.state.movie)
    // console.log(this.state.movie[0])
    return (
      <div className="container">
        <h1>Popular</h1>
        <div className="row">
          {this.state.movie.map(element => {
            return (
              <Card 
                key={element.id} 
                movieTitle={element.title} 
                movieOverview={element.overview} 
                movieReleaseDate={element.release_date}
                moviePosterPath={element.poster_path}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Popular