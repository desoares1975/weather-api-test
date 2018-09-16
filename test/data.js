

const data = require('../data')
const { expect } = require('chai')

describe('Data testing', () => {
  it('data.cities should have length of 48', done => {
    expect(data.cities.length).to.equal(48)
    done()
  })
  it('data.weather should have length of 2', done => {
    expect(data.weather.length).to.equal(2)
    done()
  })
})
