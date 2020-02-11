/* eslint-disable react/prop-types */
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@lib/theming'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { render } from '@testing-library/react'

export const testRenderer = el => renderer.create(el).toJSON()

export const ThemedComponent = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export const renderWithTheme = component => <ThemedComponent>{component}</ThemedComponent>

export const toHaveStyleRule = (component, property, value, options) => {
  expect(testRenderer(component)).toHaveStyleRule(property, value, options)
  expect(mount(component)).toHaveStyleRule(property, value, options)
  expect(render(component).container.firstChild).toHaveStyleRule(property, value, options)
}

export const shouldRenderProp = (component, as = 'div') => {
  const Component = component
  const id = 'testId'
  const { container } = render(<Component id={id} as={as} />)
  expect(container.querySelector(as).id).toEqual(id)
}

export const shouldRenderSomeText = (component, as = 'div') => {
  const Component = component
  const children = 'Text'
  const { container, queryByText } = render(<Component as={as}>{children}</Component>)
  const { childNodes } = container.querySelector(as)
  expect(childNodes).toHaveLength(1)
  expect(queryByText(children)).not.toBeNull()
}

export const mockRawOpeningHours = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [
    {
      type: 'open',
      value: 64800,
    },
  ],
  saturday: [
    {
      type: 'close',
      value: 3600,
    },
    {
      type: 'open',
      value: 32400,
    },
    {
      type: 'close',
      value: 39600,
    },
    {
      type: 'open',
      value: 57600,
    },
    {
      type: 'close',
      value: 86399,
    },
  ],
}

export const mockFormattedOpeningHours = [
  { key: 'monday', value: [] },
  { key: 'tuesday', value: [] },
  { key: 'wednesday', value: [] },
  { key: 'thursday', value: [] },
  { key: 'friday', value: [['6 PM', '1 AM']] },
  {
    key: 'saturday',
    value: [
      ['9 AM', '11 AM'],
      ['4 PM', '11:59 PM'],
    ],
  },
]
