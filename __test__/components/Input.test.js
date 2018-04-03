import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, find, simulate } from 'enzyme'

import Input from 'components/Input'

describe('Input', () => {
  test('should render correctly', () => {
    const rendered = renderer.create(<Input />)
    expect(rendered.toJSON()).toMatchSnapshot()
  })
})
