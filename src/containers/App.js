import React, { Component } from 'react'
import styled from 'styled-components'

import reset from 'styles/reset'
import { request, getURL } from 'utils/API'
import Input from 'components/Input'
import Grid from 'components/Grid'

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

  render() {
    const { searchInputValue } = this.state

    return (
      <Grid container spacing={16}>
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
      </Grid>
    )
  }

  handleSearchSubmit = e => {
    e.preventDefault(e)
    this.setState({ containerState: 'search' }, () => {
      const { containerState, searchInputValue } = this.state
      request(
        getURL({ type: containerState, searchValue: searchInputValue }),
      ).then(res => console.log(res.data.results))
    })
  }

  handleSearchInputChange = e =>
    this.setState({ searchInputValue: e.target.value })
}

export default App
