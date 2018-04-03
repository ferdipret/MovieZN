import React from 'react'
import styled, { css } from 'styled-components'

/* prettier-ignore */
export default styled.div`
  ${props => props.container && css`
    display: flex;
    flex-wrap: wrap;
    padding: 0 ${props => props.spacing ? `${props.spacing}px` : '0'};
    width: 100%;
  `};
`
