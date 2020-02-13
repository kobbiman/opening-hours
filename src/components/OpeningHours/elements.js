import styled from 'styled-components'
import Clock from '@components/ClockIcon'
import Text from '@components/Typography'

import { Flex, Box } from 'rebass/styled-components'
import { media } from '@lib/theming'

export const Wrapper = styled(Box)`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 30px;
  width: 100%;

  ${media.tablet`
    width: 355px;
  `};
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey4};
  padding-bottom: 12px;
`

export const ClockIcon = styled(Clock)`
  width: 18px;
  height: 18px;
  color: ${({ theme }) => theme.colors.grey3};
`

export const DayWrapper = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
  padding: 8px 0;
`

export const DayTitle = styled(Text)`
  text-transform: capitalize;
`
