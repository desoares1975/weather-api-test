'use strict'

const data = require('../../data')

module.exports = app => {
  app.get('/cities', (req, res) => res.status(200).json(data.cities()))
  app.get('/cities/weather', (req, res) => res.status(200).json(data.weatheredCities()))
  app.get('/cities/:id', (req, res) => res.status(200).json(data.cities().filter(c => c.id === +req.params.id)[0] || {}))
  app.get('/cities/:id/:start/:end', (req, res) => {
    let city = data.cities().filter(c => c.id === +req.params.id)[0]
    let weathers = data.weatherList()[city.id] || []

    city.weather = weathers.filter(w => ((w.dt >= (new Date(req.params.start) / 1000)) && (w.dt <= (new Date(req.params.end) / 1000))))

    res.status(200).json(city || {})
  })
}
