const potrace = require('potrace')

module.exports = function convert(buffer, color, turdSize) {
  return new Promise((resolve, reject) => {
    potrace.trace(buffer, { color, turdSize }, (err, svg) => {
      if (err) {
        return reject(err)
      }

      return resolve(svg)
    })
  })
}
