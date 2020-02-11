/**
 * Layout
 */

import React from 'react'
import PropTypes from 'prop-types'
import DefaultHeader from '@components/Header'
import { Wrapper, PageHeader, PageBody } from './elements'

const Noop = () => <></>

export function Layout({ children, bg, header: Header = DefaultHeader, footer: PageFooter = Noop }) {
  return (
    <Wrapper>
      <PageHeader>
        <Header />
      </PageHeader>
      <PageBody bg={bg} as="main">
        {children}
      </PageBody>
      <PageFooter />
    </Wrapper>
  )
}

Layout.propTypes = {
  header: PropTypes.func,
  footer: PropTypes.func,
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
}

export default Layout
