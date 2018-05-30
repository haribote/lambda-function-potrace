const potrace = require('potrace')

module.exports = function convert(buffer, color, turdSize) {
  return new Promise((resolve, reject) => {
    let params = undefined
    if (color || Number.isFinite(turdSize)) {
      params = {}
      if (color) {
        params.color = color
      }
      if (Number.isFinite(turdSize)) {
        params.turdSize = turdSize
      }
    }

    potrace.trace(buffer, params, (err, svg) => {
      if (err) {
        return reject(err)
      }

      return resolve(svg)
    })
  })
}
