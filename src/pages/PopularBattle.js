import React, { Component } from 'react'
import Card from '../components/Card'

class PopularBattle extends Component {
  constructor() {
    super()

    this.state = {
      movie: [],
      currentBattle: 0,
      arrayFavorites: []
    }


    this.handleOnClickMovie = this.handleOnClickMovie.bind(this)
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f")
      .then(response => response.json()) // on transforme la donnée reçue en JSON 
      .then(result => { this.setState({movie: result.results}) }) // on détaille l'action à exécuter sur ce JSON
  }
  handleOnClickMovie(currentBattle, id) {
    const newArray = [...this.state.arrayFavorites, id]
    this.setState({
      currentBattle: currentBattle + 2,
      arrayFavorites: newArray
    })
    localStorage.setItem("favorites", JSON.stringify(newArray))
    // console.log(localStorage)
  }
  handleClick() {
    // localStorage.removeItem("favorites")
    localStorage.clear()
  }

  render() {
    // const arrayMovie = this.state.movie.filter((element, index) => {return index === currentBattle || index === currentBattle + 1 })
    if (this.state.movie.length === 0) { 
      return null // si le serveur n'est pas encore prêt, affiche rien
    } 
    const { currentBattle, movie } = this.state
    return (
      <div className="container">
        <h1>Popular Battle</h1>
        {currentBattle === 18 ? (
          <>
            C'est fini
          </>
        ) : (
          <>
            <button onClick={this.handleClick}>Remove localStorage item</button>
            <div className="row">
              {this.state.movie.length !== 0 && 
                <>
                  <Card 
                    movieID={movie[currentBattle].id}
                    movieTitle={movie[currentBattle].title} 
                    movieOverview={movie[currentBattle].overview} 
                    movieReleaseDate={movie[currentBattle].release_date}
                    moviePosterPath={movie[currentBattle].poster_path}
                    currentBattle={currentBattle}
                    handleClick={() => this.handleOnClickMovie(currentBattle, movie[currentBattle].id)}
                    //changement de onClick à handleClick
                  />
                  <Card
                    movieID={movie[currentBattle].id}
                    movieTitle={movie[currentBattle + 1].title} 
                    movieOverview={movie[currentBattle + 1].overview} 
                    movieReleaseDate={movie[currentBattle + 1].release_date}
                    moviePosterPath={movie[currentBattle + 1].poster_path}
                    currentBattle={currentBattle}
                    onClick={() => this.handleOnClickMovie(currentBattle, movie[currentBattle].id)}
                  />
                </>
              }
              {/* {arrayMovie.map(element => {
                return (
                  <Card 
                    key={element.id} 
                    movieTitle={element.title} 
                    movieOverview={element.overview} 
                    movieReleaseDate={element.release_date}
                    moviePosterPath={element.poster_path}
                  />
                )
              })} */}
            </div>
          </>
        )}
      </div>
    )
  }
}

export default PopularBattle