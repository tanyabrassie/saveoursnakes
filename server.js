const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
const path = require('path');
const axios = require('axios');

const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/www'));
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

// create a new route that sends the request for the projects
app.get('/getSnakeProjects', function(req, res) {
  const zip = req.query.zip;
  axios.get('https://api.donorschoose.org/common/json_feed.html?zip=' + zip + '&APIKey=ef4uju946azk')
   .then(response => res.json(response.data));
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'www/index.html'));
});
 
const server = app.listen(4545, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
