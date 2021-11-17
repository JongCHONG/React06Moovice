import React, { Component } from 'react'

class Card extends Component {
  render() {
    // console.log(this.props)
    const { movieTitle, movieOverview, movieReleaseDate, moviePosterPath, handleClick } = this.props
    return (
      <div className="col-4">
        <div
          className="movie-img mb-3" 
          style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w300${moviePosterPath}')`}}
          onClick={handleClick} //remplacer la fonction par handleClick
        />
         {/* <img src={`https://image.tmdb.org/t/p/w300/`+ moviePosterPath}/> */}
        <p>{movieTitle}</p>
        <p>{movieOverview}</p>
        <p>{movieReleaseDate}</p>
      </div>
    )
  }
}

export default Card