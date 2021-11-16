import React, { Component } from 'react'

import Card from '../components/Card'

class Favorites extends Component {
  constructor() {
    super()

    this.state = {
      movie: [],
      favIDs: this.getStorage()
    }

    this.getStorage = this.getStorage.bind(this)
    this.getMovie = this.getMovie.bind(this)
  }

  componentDidMount() {
      this.state.favIDs.forEach(element => {
      fetch(this.getMovie(element))
        .then(response => response.json()) // on transforme la donnée reçue en JSON 
        .then(result => this.setState({movie: [...this.state.movie, result]})) // on détaille l'action à exécuter sur ce JSON
    })
  }

  getStorage() {
    const favorite = localStorage.getItem('favorites')
    const array = JSON.parse(favorite)
    return array
  }
  getMovie(id){
    const getMovieLink = `https://api.themoviedb.org/3/movie/${id}?api_key=74ff4d5b18f55c304a239fadf716fe2f`
    return getMovieLink
  }

  render() {
    console.log(this.state)
    return (
      <div className="container">
        <h1>Favorite</h1>
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

export default Favorites