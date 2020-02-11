import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { ThemedComponent, mockFormattedOpeningHours } from '__mocks__/helpers'

import { Wrapper } from '../elements'
import OpeningHours from '../index.js'

describe('<Wrapper />', () => {
  it('should render an <div> tag', () => {
    const component = (
      <ThemedComponent>
        <Wrapper />
      </ThemedComponent>
    )
    const { container } = render(component)
    expect(container.firstElementChild.tagName).toEqual('DIV')
  })
})

describe('<OpeningHours />', () => {
  it('should match the snapshot', () => {
    const component = (
      <ThemedComponent>
        <OpeningHours openingHours={mockFormattedOpeningHours} />
      </ThemedComponent>
    )
    const testJson = renderer.create(component).toJSON()

    expect(testJson).toMatchSnapshot()
    expect(testJson.type).toBe('div')
  })

  it('should render as expected', () => {
    const component = (
      <ThemedComponent>
        <OpeningHours openingHours={mockFormattedOpeningHours} />
      </ThemedComponent>
    )

    const { container } = render(component)
    expect(container.firstChild.children.length).toBe(2)
    expect(container.firstChild.children.length).toBe(2)
    expect(container.querySelector('svg')).not.toBeNull()
  })
})
