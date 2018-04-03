import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, find, simulate } from 'enzyme'

import Card from 'components/Card'

describe('Card', () => {
  test('should render correctly', () => {
    const rendered = renderer.create(<Card />)
    expect(rendered.toJSON()).toMatchSnapshot()
  })
})
