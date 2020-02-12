import React from 'react'
import PropTypes from 'prop-types'
import Text from '@components/Typography'
import { TuppleChecker } from '@lib/helpers'

const Hour = ({ value }) => {
  if (!value.length) {
    return <Text color="grey3">Closed</Text>
  }

  return (
    <Text>
      {value.map((hour, i) => {
        return (
          <span key={i}>
            <span key={i}>{hour.join(' - ')}</span>
            {i !== value.length - 1 && <span>{', '}</span>}
          </span>
        )
      })}
    </Text>
  )
}

Hour.propTypes = {
  value: PropTypes.arrayOf(TuppleChecker(PropTypes.string.isRequired, PropTypes.string.isRequired)),
}

export default Hour
