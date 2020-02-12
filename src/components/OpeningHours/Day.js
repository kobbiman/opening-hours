import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'rebass/styled-components'
import { TuppleChecker } from '@lib/helpers'
import { Caption } from '@components/Typography'

import Hour from './Hour'
import { DayWrapper, DayTitle } from './elements'

const weekdayName = new Date().toLocaleDateString('en', { weekday: 'long' }).toLowerCase()

const Today = () => (
  <Caption color="green" ml={2}>
    today
  </Caption>
)

const Day = ({ day }) => {
  const { key, value } = day
  return (
    <DayWrapper>
      <Flex alignItems="center">
        <DayTitle variant="h3">{key}</DayTitle>
        {weekdayName === key && <Today />}
      </Flex>
      <Flex alignItems="center" ml="10px">
        <Hour value={value} />
      </Flex>
    </DayWrapper>
  )
}

Day.propTypes = {
  day: PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.arrayOf(TuppleChecker(PropTypes.string.isRequired, PropTypes.string.isRequired)),
  }),
}

export default Day
