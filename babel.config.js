module.exports = {
  presets: [["@vue/cli-plugin-babel/preset", {
    useBuiltIns: "usage",
    polyfills: [
      'es.array.iterator',
      'es.object.assign',
      'es.string.starts-with',
      'es.promise',
      'es.symbol',
    ],
  }]]
}