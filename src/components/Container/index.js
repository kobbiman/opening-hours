import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '@lib/theming'
import { Box } from 'rebass/styled-components'

const WrapperContainer = styled(Box)`
  ${media.phone`
    max-width: 540px;
  `};

  ${media.tablet`
    max-width: 720px;
  `};

  ${media.desktop`
    max-width: 960px;
  `};

  ${media.giant`
    max-width: 1264px;
  `};
`

const Container = props => <WrapperContainer {...props} />

Container.defaultProps = {
  mx: 'auto',
  px: 3,
  width: '100%',
}

Container.displayName = 'Container'

Container.propTypes = {
  mx: PropTypes.string,
  py: PropTypes.string,
  width: PropTypes.string,
}

export default Container
