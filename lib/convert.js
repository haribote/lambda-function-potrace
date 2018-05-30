const potrace = require('potrace')

module.exports = function convert(buffer) {
  return new Promise((resolve, reject) => {
    potrace.trace(buffer, (err, svg) => {
      if (err) {
        return reject(err)
      }

      return resolve(svg)
    })
  })
}
