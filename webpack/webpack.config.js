const path = require('path')

module.exports = {
  entry: path.resolve('src/entry.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    libraryTarget: 'umd'
  },
  externals: {
    "react": {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-0'],
            plugins: ['add-module-exports']
          }
        }
      }
    ]
  }
}
