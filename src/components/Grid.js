import React from 'react'
import styled, { css } from 'styled-components'

import media from 'utils/media'

const getWidth = val => 100 / (12 / val)
const getOffset = val => 100 / (12 / val)

/* prettier-ignore */
export default styled.div`
  /**
   * For our grid we'll use containers and items
   * The container should not have any influence on our items' styles
   * Our container should only be concerned about rendering a div the full width
   * but we'll add some spacing props
   *
   * Example:
   * <Grid container spacing={16} >
   *   <SomeComponent />
   * </Grid>
   */
  ${props => props.container && css`
    display: flex;
    flex-wrap: wrap;
    padding: 0 ${props => props.spacing ? `${props.spacing}px` : '0'};
    width: 100%;
  `};

  /**
   * Item styles should be based on a 12 column grid
   * Item padding should be 1 dimentional
   * Note that we use padding so the grid item is not the content container
   * it simply creates the space to allow us to render our content as needed
   * each viewport will take and object with a span and an offset
   * Example
   * <Grid item xs={{span: 12, offset: 0}} lg={{span: 6, offset: 3}}>
   *   <SomeComponent />
   * </Grid>
   */
  ${props => props.item && css`
    width: 100%;

    ${props => props.xs && css`
      ${media.xs`
        margin-left: ${props => getOffset(props.xs.offset)}%;
        width: ${`${getWidth(props.xs.span)}%`};
      `};
    `}

    ${props => props.sm && css`
      ${media.sm`
        margin-left: ${props => getOffset(props.sm.offset)}%;
        width: ${props => `${getWidth(props.sm.span)}%`};
      `};
    `}

    ${props => props.md && css`
      ${media.md`
        margin-left: ${props => getOffset(props.md.offset)}%;
        width: ${props => `${getWidth(props.md.span)}%`};
      `};
    `}

    ${props => props.lg && css`
      ${media.lg`
        margin-left: ${props => getOffset(props.lg.offset)}%;
        width: ${props => `${getWidth(props.lg.span)}%`};
      `};
    `}

    ${props => props.xl && css`
      ${media.xl`
        margin-left: ${props => getOffset(props.xl.offset)}%;
        width: ${props => `${getWidth(props.xl.span)}%`};
      `};
    `}
  `}
`
