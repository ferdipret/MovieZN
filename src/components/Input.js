import React from 'react'
import styled from 'styled-components'

const Input = ({ className, onSearchInputChange, onSearchSubmit, value }) => (
  <form className={className} onSubmit={onSearchSubmit}>
    <input
      className="search-input"
      onChange={onSearchInputChange}
      value={value}
    />
    <button type="submit" className="form-submit-btn hidden" />
  </form>
)

export default styled(Input)`
  .hidden {
    display: none;
  }
`
