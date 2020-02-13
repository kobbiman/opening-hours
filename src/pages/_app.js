import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { theme, GlobalStyle } from '@lib/theming'
import Layout from '@components/Layout'

const AppRoot = props => {
  const { Component, pageProps } = props
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

AppRoot.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.any), PropTypes.func]),
  pageProps: PropTypes.objectOf(PropTypes.any),
  store: PropTypes.objectOf(PropTypes.any),
}
export default AppRoot
