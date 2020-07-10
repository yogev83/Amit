const path = require("path");
const dist = "./target";

module.exports = {
  entry: "./src/main/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(dist)
  },
  devtool: "#source-map",
  node:{
    dgram: 'empty',
    fs:'empty',
    net:'empty',
    tls:'empty'
  }
};
