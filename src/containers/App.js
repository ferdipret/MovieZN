import React, { Component } from 'react'
import styled from 'styled-components'

import reset from 'styles/reset'
import request from 'utils/API'
import Input from 'components/Input'
import Grid from 'components/Grid'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // This will hold our search value
      searchInputValue: '',
      /**
       * Our centent container will have 3 states:
       * 'discover': This will be the default, with some filter options
       * 'search':   When the user makes a search, we will show relavant results
       * 'select':   If an item has been selected, we want to display more info for that item
       */
      containerState: 'discover',
    }
  }

  render() {
    const { searchInputValue } = this.state

    return (
      <Grid container spacing={16}>
        <Grid item xs={{ span: 6, offset: 1 }}>
          MovieZN
        </Grid>
        <Input
          onSearchInputChange={this.handleSearchInputChange}
          value={searchInputValue}
        />
      </Grid>
    )
  }

  handleSearchInputChange = e =>
    this.setState({ searchInputValue: e.target.value })
}

export default App
