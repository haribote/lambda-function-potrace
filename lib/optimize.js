const SVGO = require('svgo')

module.exports = function optimize(svg) {
  return new Promise(resolve => {
    const svgo = new SVGO({
      plugins: [
        {
          cleanupAttrs: true
        },
        {
          removeDoctype: true
        },
        {
          removeXMLProcInst: true
        },
        {
          removeComments: true
        },
        {
          removeMetadata: true
        },
        {
          removeTitle: true
        },
        {
          removeDesc: true
        },
        {
          removeUselessDefs: true
        },
        {
          removeEditorsNSData: true
        },
        {
          removeEmptyAttrs: true
        },
        {
          removeHiddenElems: true
        },
        {
          removeEmptyText: true
        },
        {
          removeEmptyContainers: true
        },
        {
          removeViewBox: false
        },
        {
          cleanUpEnableBackground: true
        },
        {
          convertStyleToAttrs: true
        },
        {
          convertColors: true
        },
        {
          convertPathData: true
        },
        {
          convertTransform: true
        },
        {
          removeUnknownsAndDefaults: true
        },
        {
          removeNonInheritableGroupAttrs: true
        },
        {
          removeUselessStrokeAndFill: true
        },
        {
          removeUnusedNS: true
        },
        {
          cleanupIDs: true
        },
        {
          cleanupNumericValues: true
        },
        {
          moveElemsAttrsToGroup: true
        },
        {
          moveGroupAttrsToElems: true
        },
        {
          collapseGroups: true
        },
        {
          removeRasterImages: false
        },
        {
          mergePaths: true
        },
        {
          convertShapeToPath: true
        },
        {
          sortAttrs: true
        },
        {
          transformsWithOnePath: false
        },
        {
          removeDimensions: true
        },
        {
          removeAttrs: { attrs: '(stroke|fill)' }
        }
      ]
    })

    svgo.optimize(svg).then(result => resolve(result.data))
  })
}
