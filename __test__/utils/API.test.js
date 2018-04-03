import mockRequest from '__mock__/request'
import { request } from 'utils/API'

// Since axios returns promises, all we're doing here is making sure our mock
// can be resolved using the same technique
it('works with promises', () => {
  expect.assertions(1)
  return mockRequest(550).then(data => expect(data.title).toEqual('Fight Club'))
})
