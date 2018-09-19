'use strict'

const cities = require('./city_list.json')
const weather = require('./weather_list.json')
const weatherList = {}
const weatheredCities = weather.map(w => {
  weatherList[w.cityId] = w.data
  return w.cityId
})

module.exports = {
  cities: () => cities,
  weatherList: () => weatherList,
  weatheredCities: () => cities.slice()
    .filter(city => weatheredCities.includes(city.id))
    .map(city => {
      city.weather = weatherList[city.id]

      return city
    })
}
