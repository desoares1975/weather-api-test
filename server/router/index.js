'use strict'

const cities = require('./cities')

module.exports = app => {
  app.get('/cities', cities.list)
  app.get('/cities/weather', cities.citiesWithWeather)
  app.get('/cities/:id', cities.read)
  app.get('/cities/:lat/:lon', cities.getByCoordinates)
  app.get('/cities/:id/:start/:end', cities.filterWeather)
}
