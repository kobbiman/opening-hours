import React from 'react'
import PropTypes from 'prop-types'

const SvgClock = ({ svgRef, ...props }) => (
  <svg width="1em" height="1em" viewBox="15 20 70 60" ref={svgRef} {...props}>
    <path
      fill="currentColor"
      d="M50 17c-18.202 0-33 14.798-33 33 0 18.202 14.798 33 33 33 18.202 0 33-14.798 33-33 0-18.202-14.798-33-33-33zm0 4c16.04 0 29 12.96 29 29S66.04 79 50 79 21 66.04 21 50s12.96-29 29-29zm0 8a2 2 0 0 0-2 2v19c0 .552.232 1.044.594 1.406l12 12.032a2.018 2.018 0 0 0 2.843 0 2.019 2.019 0 0 0 0-2.844L52 49.188V31a2 2 0 0 0-2-2z"
    />
  </svg>
)

SvgClock.propTypes = {
  svgRef: PropTypes.func,
}

const ForwardRef = React.forwardRef((props, ref) => <SvgClock svgRef={ref} {...props} />)
export default ForwardRef
