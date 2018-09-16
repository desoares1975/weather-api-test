'use strict'

const data = require('../../data')

module.exports = app => {
  app.get('/', (req, res) => res.status(200).json('WELLCOME'))
  app.get('/cities', (req, res) => res.status(200).json(data.cities))
  app.get('/cities/weather', (req, res) => {
    let weathers = []
    let weatheredCities = data.weather.map(w => {
      weathers.push({ [w.cityId]: w })
      return w.cityId
    })
    let response = data.cities
      .filter(city => weatheredCities.includes(city.id))
      .map(city => {
        city.weather = weathers[city.id]
        return city
      })
    res.status(200).json(response)
  })
}