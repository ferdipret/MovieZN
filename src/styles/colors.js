/**
 * NOTE: Since we are using styled components our colours are functions that
 * returns an hsl() value as a string, all off our colours can be passed
 * a number param, the number is the lightness from 1 - 100, this way,
 * we can increase/decrease the lightness. Very usefull for hover/active
 * element states.
 *
 * These colour variables can also be passed to a component/elements {style}
 * props
 *
 * @param {number} l - Lightness in the hsl() color, from 1 - 100
 */

export default {
  background: (l = 13) => `hsl(0, 0%, ${l}%)`,
}
