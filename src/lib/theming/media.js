import { css } from 'styled-components'
import { breakpoints } from './theme'

const sizes = {
  phone: breakpoints[0],
  tablet: breakpoints[1],
  desktop: breakpoints[2],
  giant: breakpoints[3],
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use px in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const pxSize = sizes[label]

  /* eslint-disable-next-line no-param-reassign */
  accumulator[label] = (...args) => css`
    @media (min-width: ${pxSize}) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
