import React from 'react'
import styled from 'styled-components'

const Input = ({ className, onSearchInputChange, value }) => (
  <div>
    <input className={className} onChange={onSearchInputChange} value={value} />
  </div>
)

export default styled(Input)``
