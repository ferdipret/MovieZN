import React, { Component } from 'react'
import Input from 'components/Input'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInputValue: '',
    }
  }

  render() {
    const { searchInputValue } = this.state

    return (
      <div>
        <div>Hello, MovieZN</div>
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
