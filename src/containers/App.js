import React, { Component } from 'react'
import Input from 'components/Input'

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
      <div>
        <div>MovieZN</div>
        <Input
          onSearchInputChange={this.handleSearchInputChange}
          value={searchInputValue}
        />
      </div>
    )
  }

  handleSearchInputChange = e =>
    this.setState({ searchInputValue: e.target.value })
}

export default App
