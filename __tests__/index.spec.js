const lambda = require('../index')
const dummy = require('../__mocks__/dummy.jpg')

describe('lambda-function-potrace', () => {
  it('matches to snapshot', async () => {
    const svg = await lambda.handler({ base64Image: dummy })
    expect(new Buffer(svg, 'base64').toString()).toMatchSnapshot()
  })
})
