'use strict'

const data = require('../../data')

module.exports = {
  read (req, res) {
    let city = data.cities().filter(c => c.id === +req.params.id)[0] || {}

    if (city.id) {
      city.weather = data.weatherList()[city.id] || []
    }

    res.status(200).json(city)
  },
  list (req, res) {
    res.status(200).json(data.cities())
  },
  citiesWithWeather (req, res) {
    res.status(200).json(data.weatheredCities())
  },
  getByCoordinates (req, res) {
    let city = data.cities().filter(c => c.coord.lat === +req.params.lat && c.coord.lon === +req.params.lon)[0] || {}

    if (city.id) {
      city.weather = data.weatherList()[city.id] || []
    }

    res.status(200).json(city)
  },
  filterWeather (req, res) {
    let city = data.cities().filter(c => c.id === +req.params.id)[0]
    let weathers = data.weatherList()[city.id] || []

    city.weather = weathers.filter(w => ((w.dt >= (new Date(req.params.start) / 1000)) && (w.dt <= (new Date(req.params.end) / 1000))))

    res.status(200).json(city || {})
  }
}
