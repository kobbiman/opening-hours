/* eslint-disable react/prop-types */
import React from 'react'
import Text, { H1, H2, H3, H4, Caption } from '../index.js'
import { renderWithTheme, shouldRenderProp, shouldRenderSomeText, toHaveStyleRule } from '__mocks__/helpers'

describe('Typography H1', () => {
  it('should render a H1', () => {
    const component = renderWithTheme(<H1 />)
    toHaveStyleRule(component, 'font-size', '24px')
    toHaveStyleRule(component, 'font-weight', '700')
    toHaveStyleRule(component, 'line-height', '30px')
  })

  it('should render a prop', () => {
    shouldRenderProp(H1, 'h1')
  })

  it('should render its text', () => {
    shouldRenderSomeText(H1, 'h1')
  })
})

describe('Typography H2', () => {
  it('should render a H2', () => {
    const component = renderWithTheme(<H2 />)
    toHaveStyleRule(component, 'font-size', '20px')
    toHaveStyleRule(component, 'font-weight', '700')
    toHaveStyleRule(component, 'line-height', '26px')
  })

  it('should render a prop', () => {
    shouldRenderProp(H2, 'h2')
  })

  it('should render its text', () => {
    shouldRenderSomeText(H2, 'h2')
  })
})

describe('Typography H3', () => {
  it('should render a H3', () => {
    const component = renderWithTheme(<H3 />)
    toHaveStyleRule(component, 'font-size', '16px')
    toHaveStyleRule(component, 'font-weight', '500')
    toHaveStyleRule(component, 'line-height', '22px')
  })

  it('should render a prop', () => {
    shouldRenderProp(H3, 'h3')
  })

  it('should render its text', () => {
    shouldRenderSomeText(H3, 'h3')
  })
})

describe('Typography H4', () => {
  it('should render a H4', () => {
    const component = renderWithTheme(<H4 />)
    toHaveStyleRule(component, 'font-size', '12px')
    toHaveStyleRule(component, 'font-weight', '700')
    toHaveStyleRule(component, 'line-height', '16px')
  })

  it('should render a prop', () => {
    shouldRenderProp(H4, 'h4')
  })

  it('should render its text', () => {
    shouldRenderSomeText(H4, 'h4')
  })
})

describe('Typography Caption', () => {
  it('should render a Caption', () => {
    const component = renderWithTheme(<Caption />)
    toHaveStyleRule(component, 'font-size', '12px')
    toHaveStyleRule(component, 'font-weight', '700')
    toHaveStyleRule(component, 'line-height', '16px')
    toHaveStyleRule(component, 'text-transform', 'uppercase')
  })

  it('should render a prop', () => {
    shouldRenderProp(Caption, 'h5')
  })

  it('should render its text', () => {
    shouldRenderSomeText(Caption, 'h5')
  })
})

describe('Typography Text', () => {
  it('should render a prop', () => {
    shouldRenderProp(Text, 'p')
  })

  it('should render its text', () => {
    shouldRenderSomeText(Text, 'p')
  })
})
