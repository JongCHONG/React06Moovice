import React, { Component } from 'react'

class Favorites extends Component {
  constructor() {
    super()

    this.state = {
      movie: [],
      favIDs: this.getStorage()
    }

    this.getStorage = this.getStorage.bind(this)
  }

  getStorage() {
    const favorite = localStorage.getItem('favorites')
    console.log(favorite);
    const array = JSON.parse(favorite)
    return array
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Favorites</h1>
          
      </div>
    )
  }
}

export default Favorites