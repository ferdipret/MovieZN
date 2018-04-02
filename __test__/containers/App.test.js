import React from 'react'
import renderer from 'react-test-renderer'
import { mount, find, simulate } from 'enzyme'

import App from 'containers/App'

// We should make sure the app doesn't have any problems
// on the initial render
describe('App', () => {
  test('should render correctly', () => {
    const rendered = renderer.create(<App />)
    expect(rendered.toJSON()).toMatchSnapshot()
  })
})

describe('App/Input', () => {
  test('should update state when onChange is called', () => {
    const wrapper = mount(<App />)
    const input = wrapper.find('.search-input')

    input.simulate('change', { target: { value: 'New Value' } })

    expect(wrapper.state().searchInputValue).toBe('New Value')
  })
})
