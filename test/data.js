'use strict'

const data = require('../data')
const { expect } = require('chai')

describe('Data testing', () => {
  it('data.cities should have length of 48', done => {
    expect(data.cities().length).to.equal(48)
    done()
  })
  it('data.cities[0] should have wether with lenght of 16', done => {
    expect(data.cities()[0].weather).to.equal(undefined)
    done()
  })
  it('data.weatheredCities should have wether with lenght of 2', done => {
    expect(data.weatheredCities().length).to.equal(2)
    done()
  })
})
