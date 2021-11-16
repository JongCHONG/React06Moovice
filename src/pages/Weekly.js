import React, { Component } from 'react'

import Card from '../components/Card'
import moment from 'moment';

class Weekly extends Component {
  constructor() {
    super()

    this.state = {
      movie: []
    }
  }

  componentDidMount() {
    const API_KEY = "74ff4d5b18f55c304a239fadf716fe2f"
    const TODAY = moment().format('YYYY-MM-DD')
    const LAST_WEEK = moment().subtract(7, 'd').format('YYYY-MM-DD')
    fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=${API_KEY}`)
      .then(response => response.json()) // on transforme la donnée reçue en JSON 
      .then(result => { this.setState({movie: result.results}) }) // on détaille l'action à exécuter sur ce JSON
  }

  render() {

    return (
      <div className="container">
        <h1>Weekly</h1>
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

export default Weekly