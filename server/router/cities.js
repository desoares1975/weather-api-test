'use strict'

const data = require('../../data')

const cities = {
  read (req, res) {
    if (req.query.start) {
      req.query.end = req.query.end || new Date()

      return cities.filterWeather(req, res)
    }

    let city = Object.assign({}, (data.cities().filter(c => c.id === +req.params.id)[0]))

    if (!city.id) {
      return res.status(404).send('NOT FOUND')
    }

    city.weather = data.weatherList()[city.id] || []

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
    let lat = +req.query.lat
    let lon = +req.query.lon

    if (isNaN(lat) || isNaN(lon)) {
      return res.status(400).send('BAD REQUEST')
    }

    let city = Object.assign({}, data.cities().filter(c => c.coord.lat === lat && c.coord.lon === lon)[0])

    if (!city.id) {
      return res.status(404).json('NOT FOUND')
    }

    if (city.id) {
      city.weather = data.weatherList()[city.id] || []
    }

    res.status(200).json(city)
  },
  filterWeather (req, res) {
    let start = new Date(req.query.start)
    let end = new Date(req.query.end)

    if (start.toString() === 'Invalid Date' || end.toString() === 'Invalid Date') {
      return res.status(400).send('BAD REQUEST')
    }

    start = start / 1000
    end = end / 1000

    let city = data.cities().filter(c => c.id === +req.params.id)[0] || {}
    let weathers = data.weatherList()[city.id] || []

    city.weather = weathers.filter(w => ((w.dt >= (start / 1000) && (w.dt <= end))))

    res.status(200).json(city || {})
  }
}

module.exports = cities
