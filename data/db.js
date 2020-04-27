const knex = require('knex')
module.exports = db = knex(require('../knexfile').development)

