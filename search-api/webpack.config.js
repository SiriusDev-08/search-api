module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./app.ts",
    output: {
      filename: "bundle.js"
    },
    resolve: {
        extensions: ['.jsx', '.ts', '.tsx', '...']
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.tsx?$/, loader: "ts-loader" }
      ]
    }
  };