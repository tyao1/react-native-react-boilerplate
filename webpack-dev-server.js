var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require("./webpack.web.config.js");
config.entry.main.unshift("webpack-dev-server/client?http://localhost:8080", "webpack/hot/dev-server");
if (config.plugins) config.plugins.push(new webpack.HotModuleReplacementPlugin());
else config.plugins = [new webpack.HotModuleReplacementPlugin()];
var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
  hot: true
});
server.listen(8080);
