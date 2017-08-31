const webpack = require('webpack');
const card = require('./webpack.config.card.js');
const hate_crime = require('./webpack.config.hatecrime.js');
const card_init = require('./webpack.config.cardinit.js');
module.exports = [
  card,
  card_init,
  hate_crime
];
