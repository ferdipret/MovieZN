import React from 'react'
import renderer from 'react-test-renderer'

import App from 'containers/App'

// We should make sure the app doesn't have any problems
// on the initial render
describe('App', () => {
  test('should render correctly', () => {
    const rendered = renderer.create(<App />)
    expect(rendered.toJSON()).toMatchSnapshot()
  })
})
