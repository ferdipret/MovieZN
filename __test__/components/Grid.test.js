import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, find, simulate } from 'enzyme'

import Grid from 'components/Grid'

describe('Grid', () => {
  test('should render correctly', () => {
    const rendered = renderer.create(<Grid />)
    expect(rendered.toJSON()).toMatchSnapshot()
  })
})
