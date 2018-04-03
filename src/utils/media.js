import { css } from 'styled-components'

// These are just common break points we'll use for media queries
const sizes = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}
// A simple utility function to create media query templates a lot easier
// This will make it possible to do something like this in our styled components
// ${media.md`
//   width: 100%;
// `}
const media = Object.keys(sizes).reduce((accumulator, label) => {
  // We'll use em sizes here for better cross-browser compatibility when users
  // change the font-sizes
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export default media
