'use strict'

const data = require('../../data')

const cities = {
  read (req, res) {
    if (req.query.start) {
      req.query.end = req.query.end || new Date()

      return cities.filterWeather(req, res)
    }

    let city = data.cities().filter(c => c.id === +req.params.id)[0] || {}

    if (city.id) {
      city.weather = data.weatherList()[city.id] || []
    }

    res.status(200).json(city)
  },
  list (req, res) {
    if (req.query.lat && req.query.lon) {
      return cities.getByCoordinates(req, res)
    }

    res.status(200).json(data.cities())
  },
  citiesWithWeather (req, res) {
    res.status(200).json(data.weatheredCities())
  },
  getByCoordinates (req, res) {
    let city = data.cities().filter(c => c.coord.lat === +req.query.lat && c.coord.lon === +req.query.lon)[0] || {}

    if (city.id) {
      city.weather = data.weatherList()[city.id] || []
    }

    res.status(200).json(city)
  },
  filterWeather (req, res) {
    let city = data.cities().filter(c => c.id === +req.params.id)[0] || {}
    let weathers = data.weatherList()[city.id] || []

    city.weather = weathers.filter(w => ((w.dt >= (new Date(req.query.start) / 1000)) && (w.dt <= (new Date(req.query.end) / 1000))))

    res.status(200).json(city || {})
  }
}

module.exports = cities
