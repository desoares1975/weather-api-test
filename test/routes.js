'use strict'

const request = require('supertest')
const { expect } = require('chai')
const app = require('../server')

describe('Test the app routes', () => {
  it('Should get all the cities', done => {
    request(app)
      .get('/cities')
      .expect(200)
      .end((err, data) => {
        if (err) {
          console.log(err)
        }

        expect(data.body.length).to.equal(48)
        expect(data.body[0].id).to.equal(3531732)
        expect(data.body[0].weather).to.equal(undefined)
        done()
      })
  })
  it('Should should find city by coordinates using query string', done => {
    request(app)
      .get('/cities?lat=-32.856789&lon=-61.153309')
      .expect(200)
      .end((err, data) => {
        if (err) {
          console.log(err)
        }

        expect(data.body).to.be.an('object')
        expect(data.body.id).to.equal(3862655)
        done()
      })
  })
  it('Should should return 404 for unexisting city', done => {
    request(app)
      .get('/cities?lat=-33.856789&lon=-69.153309')
      .expect(404)
      .end((err, data) => {
        if (err) {
          console.log(err)
        }

        expect(data.body.id).to.equal(undefined)
        done()
      })
  })
  it('Should return 400 for invalid lat', done => {
    request(app)
      .get('/cities?lat=test&lon=-61.153309')
      .expect(400)
      .end((err, data) => {
        if (err) {
          console.log(err)
        }

        expect(data.body.id).to.equal(undefined)
        done()
      })
  })
  it('Should return 400 for invalid lon', done => {
    request(app)
      .get('/cities?lat=-33.856789&lon=another test')
      .expect(400)
      .end((err, data) => {
        if (err) {
          console.log(err)
        }

        expect(data.body.id).to.equal(undefined)
        done()
      })
  })
  it('Should get the cities with weather', done => {
    request(app)
      .get('/cities/weather')
      .expect(200)
      .end((err, data) => {
        if (err) {
          console.log(err)
        }

        expect(data.body.length).to.equal(2)
        expect(data.body[0].weather.length).to.equal(16)
        expect(data.body[0].id).to.equal(3531732)
        expect(data.body[1].weather.length).to.equal(16)
        expect(data.body[1].id).to.equal(3992619)
        done()
      })
  })
  it('Should get the city 3988086', done => {
    request(app)
      .get('/cities/3988086')
      .expect(200)
      .end((err, data) => {
        if (err) {
          console.log(err)
        }

        expect(data.body).to.be.an('object')
        expect(data.body.weather).to.be.an('array')
        expect(data.body.weather.length).to.equal(0)
        expect(data.body.id).to.equal(3988086)
        done()
      })
  })
  it('Should get the city 3531732', done => {
    request(app)
      .get('/cities/3531732')
      .expect(200)
      .end((err, data) => {
        if (err) {
          console.log(err)
        }

        expect(data.body).to.be.an('object')
        expect(data.body.weather).to.be.an('array')
        expect(data.body.weather.length).to.equal(16)
        expect(data.body.id).to.equal(3531732)
        done()
      })
  })
  it('Should not change the data', done => {
    request(app)
      .get('/cities')
      .expect(200)
      .end((err, data) => {
        if (err) {
          console.log(err)
        }

        expect(data.body.length).to.equal(48)
        expect(data.body[0].id).to.equal(3531732)
        expect(data.body[0].weather).to.equal(undefined)
        done()
      })
  })
  it('Should get the city 3992619 with weather form 2017-03-13 to 2017-03-15 with query string', done => {
    request(app)
      .get('/cities/3992619?start=2017-03-13&end=2017-03-15')
      .expect(200)
      .end((err, data) => {
        if (err) {
          console.log(err)
        }

        expect(data.body).to.be.an('object')
        expect(data.body.weather.length).to.equal(2)
        expect(data.body.id).to.equal(3992619)
        done()
      })
  })
  it('Should return 400 for invalid date on start', done => {
    request(app)
      .get('/cities/3992619?start=errored-test&end=2017-03-15')
      .expect(400)
      .end((err, data) => {
        if (err) {
          console.log(err)
        }

        expect(data.body.weather).to.equal(undefined)
        expect(data.body.id).to.equal(undefined)
        done()
      })
  })
  it('Should return 400 for invalid date on end', done => {
    request(app)
      .get('/cities/3992619?start=2017-03-13&end=other error ok')
      .expect(400)
      .end((err, data) => {
        if (err) {
          console.log(err)
        }

        expect(data.body.weather).to.equal(undefined)
        expect(data.body.id).to.equal(undefined)
        done()
      })
  })
  it('Should not get the city 3988 nor break', done => {
    request(app)
      .get('/cities/3988')
      .expect(404)
      .end((err, data) => {
        if (err) {
          console.log(err)
        }

        expect(data.body.id).to.equal(undefined)
        done()
      })
  })
  it('Should not break when filtering 3988214 with no weather form 2017-03-13 to 2017-03-15', done => {
    request(app)
      .get('/cities/3988214?start=2017-03-13&end=2017-03-15')
      .expect(200)
      .end((err, data) => {
        if (err) {
          console.log(err)
        }

        expect(data.body).to.be.an('object')
        expect(data.body.weather.length).to.equal(0)
        expect(data.body.id).to.equal(3988214)
        done()
      })
  })
  it('Should return 404 in unexisting route', done => {
    request(app)
      .get('/test-invalid-route')
      .expect(404)
      .end((err, data) => {
        if (err) {
          console.log(err)
        }

        done()
      })
  })
})
