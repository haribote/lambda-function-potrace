const convert = require('./lib/convert')
const optimize = require('./lib/optimize')

exports.handler = async event => {
  const { base64Image, color, turdSize } = event
  const buffer = new Buffer(base64Image, 'base64')
  const svg = await convert(buffer, color, turdSize)
  const optimised = await optimize(svg)

  return new Buffer(optimised).toString('base64')
}
