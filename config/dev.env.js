'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ROOT_API: '"https://burger-crawler.herokuapp.com/api/"',
  BURGER_VENUES_END_POINT: '"venues/burger-venues"'
})
