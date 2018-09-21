'use strict'

const cities = require('./cities')

module.exports = app => {
  app.get('/cities', cities.list)
  app.get('/cities/weather', cities.citiesWithWeather)
  app.get('/cities/:id', cities.read)
  app.all('*', (req, res) => res.status(404).send('NOT FOUND'))
}
