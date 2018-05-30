const convert = require('./lib/convert')

exports.handler = async event => {
  const { base64Image } = event
  const buffer = new Buffer(base64Image, 'base64')
  const svg = await convert(buffer)

  return new Buffer(svg).toString('base64')
}
