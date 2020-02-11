import React from 'react'
import renderer from 'react-test-renderer'
import { ThemedComponent } from '__mocks__/helpers'

import Layout from '../index.js'

describe('<Layout />', () => {
  it('should match the snapshot', () => {
    const component = (
      <ThemedComponent>
        <Layout>test</Layout>
      </ThemedComponent>
    )
    const renderedComponent = renderer.create(component).toJSON()
    expect(renderedComponent).toMatchSnapshot()
  })
})
