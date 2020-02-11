import React from 'react'
import { Text } from 'rebass/styled-components'
import PropTypes from 'prop-types'

export const Typography = ({ ...props }) => <Text {...props} />

export const H1 = props => <Typography as="h1" variant="h1" {...props} />

export const H2 = props => <Typography as="h2" variant="h2" {...props} />

export const H3 = props => <Typography as="h3" variant="h3" {...props} />

export const H4 = props => <Typography as="h4" variant="h4" {...props} />

export const Caption = props => <Typography as="h5" variant="caption" {...props} />

Typography.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'caption']),
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontFamily: PropTypes.string,
  textAlign: PropTypes.string,
  letterSpacing: PropTypes.string,
  as: PropTypes.string,
}

export default Typography
