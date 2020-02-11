import React from 'react'
import NextHead from 'next/head'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { theme, GlobalStyle } from '@lib/theming'
import Layout from '@components/Layout'

const AppRoot = props => {
  const { Component, pageProps } = props
  return (
    <ThemeProvider theme={theme}>
      <NextHead>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet" />
      </NextHead>
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
