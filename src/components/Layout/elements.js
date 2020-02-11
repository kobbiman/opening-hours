import styled, { css } from 'styled-components'
import { Box } from 'rebass/styled-components'

const baseStyle = css`
  flex-shrink: 0;
`

export const Wrapper = styled.article`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: ${props => props.theme.colors.background};

  /* header, */
  footer {
    ${baseStyle};
  }
`
export const PageHeader = styled(Box)`
  ${baseStyle};
  position: sticky;
  top: 0;
  z-index: 1250;
`

export const PageBody = styled(Box)`
  ${baseStyle};
  flex-grow: 1;
`
