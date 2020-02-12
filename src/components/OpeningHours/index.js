import React from 'react'
import PropTypes from 'prop-types'
import { H1 } from '@components/Typography'
import Day from './Day'
import { TuppleChecker } from '@lib/helpers'

import { Wrapper, Title, ClockIcon } from './elements'

const OpeningHours = ({ openingHours }) => {
  return (
    <Wrapper>
      <Title>
        <ClockIcon />
        <H1 ml={3}>Opening hours</H1>
      </Title>
      <div>
        {openingHours.map(day => (
          <Day key={day.key} day={day} />
        ))}
      </div>
    </Wrapper>
  )
}

OpeningHours.propTypes = {
  openingHours: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.arrayOf(TuppleChecker(PropTypes.string.isRequired, PropTypes.string.isRequired)),
    }),
  ).isRequired,
}

export default OpeningHours
