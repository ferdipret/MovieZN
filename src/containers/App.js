import React, { Component } from 'react'

import reset from 'styles/reset'
import { request, getURL } from 'utils/API'
import Input from 'components/Input'
import Grid from 'components/Grid'
import Card from 'components/Card'
import color from 'styles/colors'

const initialState = {
  // This will hold our search value
  searchInputValue: '',
  /**
   * Our centent container will have 3 states:
   * 'discover': This will be the default, with some filter options
   * 'search':   When the user makes a search, we will show relavant results
   * 'select':   If an item has been selected, we want to display more info for that item
   */
  containerState: 'discover',
  /**
   * Movies will be kept as an array
   */
  movies: undefined,
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = initialState
  }

  componentWillMount() {
    // When the app mounts, we'll make a request to get some featured movies
    // From the movie db, and set that to our component state
    request(
      getURL({
        searchValue: this.state.searchInputValue,
        type: this.state.containerState,
      }),
    ).then(res => this.setState({ movies: res.data.results }))
  }

  render() {
    const { searchInputValue } = this.state

    return (
      <Grid
        container
        spacing={16}
        style={{ backgroundColor: color.background() }}>
        <Grid item xs={{ span: 6, offset: 0 }}>
          MovieZN
        </Grid>

        <Grid item xs={{ span: 12, offset: 0 }}>
          <Input
            onSearchSubmit={this.handleSearchSubmit}
            onSearchInputChange={this.handleSearchInputChange}
            value={searchInputValue}
          />
        </Grid>

        {/* Here we'll render the movie posters in our card compontent */}
        {this.state.movies
          ? this.state.movies.map(movie => (
              <Grid
                item
                xs={{ span: 12, offset: 0 }}
                sm={{ span: 6, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                md={{ span: 3, offset: 0 }}
                key={movie.id}>
                <Card movie={movie} />
              </Grid>
            ))
          : null}
      </Grid>
    )
  }

  handleSearchSubmit = e => {
    // When we submit our search, we want to set our containerState to 'search'
    // This way we can indicate to the user that a search is in progress, and
    // render the results once it has resolved
    e.preventDefault(e)
    this.setState({ containerState: 'search' }, () => {
      const { containerState, searchInputValue } = this.state
      request(
        getURL({ type: containerState, searchValue: searchInputValue }),
      ).then(res => this.setState({ movies: res.data.results }))
    })
  }

  handleSearchInputChange = e => {
    // When we make a search we'll get the value from our component state
    // So our handler should just set this state to searchInputValue
    return this.setState({ searchInputValue: e.target.value })
  }
}

export default App
