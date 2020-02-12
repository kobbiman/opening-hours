import React from 'react'
import PropTypes from 'prop-types'
import apiClient from '@lib/apiClient'
import { formatOpeningHours, TuppleChecker } from '@lib/helpers'
import OpeningHours from '@components/OpeningHours'

import { PageWrapper } from './elements'

export const Home = ({ openingHours }) => {
  return (
    <PageWrapper>
      <OpeningHours openingHours={openingHours} />
    </PageWrapper>
  )
}

Home.propTypes = {
  openingHours: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.arrayOf(TuppleChecker(PropTypes.string.isRequired, PropTypes.string.isRequired)),
    }),
  ),
}

Home.getInitialProps = async () => {
  const data = await apiClient.getOpeningHours()
  const parsedOpeningHours = formatOpeningHours(data)
  return { openingHours: parsedOpeningHours }
}

export default Home
