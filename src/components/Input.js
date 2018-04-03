import React from 'react'
import styled from 'styled-components'

const Input = ({ className, onSearchInputChange, value }) => (
  <form>
    <input
      className={`${className} search-input`}
      onChange={onSearchInputChange}
      value={value}
    />
    <button type="submit" className="form-submit-btn" />
  </form>
)

export default styled(Input)``
