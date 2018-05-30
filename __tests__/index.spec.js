const lambda = require('../index')
const dummy = require('../__mocks__/dummy.jpg')

function stringfy(base64) {
  return new Buffer(base64, 'base64').toString()
}

describe('lambda-function-potrace', () => {
  describe('default', () => {
    it('matches to snapshot', async () => {
      const svg = await lambda.handler({ base64Image: dummy })
      expect(stringfy(svg)).toMatchSnapshot()
    })
  })

  describe('set params', () => {
    it('matches to snapshot', async () => {
      const svg = await lambda.handler({
        base64Image: dummy,
        color: '#ccc',
        turdSize: 10
      })
      expect(stringfy(svg)).toMatchSnapshot()
    })
  })
})
