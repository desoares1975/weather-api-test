'use strict'

const data = require('../data')
const { expect } = require('chai')

describe('Data testing', () => {
  it('data.cities should have length of 48', done => {
    expect(data.cities().length).to.equal(48)
    expect(data.cities()[0].weather).to.equal(undefined)
    done()
  })
  it('data.cities[0] should not have wether', done => {
    expect(data.cities()[0].weather).to.equal(undefined)
    done()
  })
  it('data.weatheredCities should have wether with lenght of 2', done => {
    expect(data.weatheredCities().length).to.equal(2)
    done()
  })
  it('data.weatherList should have 2 items', done => {
    let list = data.weatherList()

    expect(list).to.be.an('object')
    expect(list['3531732']).to.be.an('array')
    expect(list['3531732'].length).to.equal(16)
    expect(list['3992619']).to.be.an('array')
    expect(list['3992619'].length).to.equal(16)
    done()
  })
})
