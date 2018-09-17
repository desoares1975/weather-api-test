# Wether API Test

##Usage

### Installation

```bash
$ npm install
```

Save the .env.sample file as .env and set the application port:
```env
PORT=8900
```

###Testing
Inside the application folder type:
```bash
$ npm test
```
This will run all the automated tests

###Cosuming the routes
Start the application:

```bash
$ nodemon
```

###Available Routes
The application routes are the following:

####GET /cities

Will return a json like this:
```json
[
  {
        "id": 3988214,
        "coord": {
            "lon": -101.199997,
            "lat": 20.566669
        },
        "country": "MX",
        "geoname": {
            "cl": "P",
            "code": "PPL",
            "parent": 4005267
        },
        "name": "Salamanca",
        "stat": {
            "level": 1,
            "population": 138614
        },
        "stations": [
            {
                "id": 3981,
                "dist": 55,
                "kf": 1
            },
            {
                "id": 4003,
                "dist": 82,
                "kf": 1
            },
            {
                "id": 27889,
                "dist": 82,
                "kf": 1
            },
            {
                "id": 32874,
                "dist": 61,
                "kf": 1
            }
        ],
        "zoom": 9
    }
]
```

####GET /cities/weather

Will return an array with all the cities that have weather list
```json
[
  {
    "id": 3992619,
    "coord": {
        "lon": -100.51667,
        "lat": 28.700001
    },
    "country": "MX",
    "geoname": {
        "cl": "P",
        "code": "PPL",
        "parent": 4013674
    },
    "name": "Piedras Negras",
    "stat": {
        "level": 1,
        "population": 139619
    },
    "stations": [
        {
            "id": 2575,
            "dist": 80,
            "kf": 1
        },
        {
            "id": 2598,
            "dist": 84,
            "kf": 1
        },
        {
            "id": 2618,
            "dist": 94,
            "kf": 1
        },
        {
            "id": 2666,
            "dist": 77,
            "kf": 1
        },
        {
            "id": 4007,
            "dist": 8,
            "kf": 1
        },
        {
            "id": 28781,
            "dist": 66,
            "kf": 1
        }
    ],
    "zoom": 8,
    "weather": [
        {
            "dt": 1489428000,
            "temp": {
                "day": 288.64,
                "min": 285.82,
                "max": 288.64,
                "night": 285.82,
                "eve": 288.64,
                "morn": 288.64
            },
            "pressure": 997.85,
            "humidity": 67,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "speed": 2.96,
            "deg": 28,
            "clouds": 76,
            "uvi": 8.7
        },
        {
            "dt": 1489514400,
            "temp": {
                "day": 293.16,
                "min": 285.16,
                "max": 296.15,
                "night": 287.94,
                "eve": 295.56,
                "morn": 285.16
            },
            "pressure": 1001.17,
            "humidity": 64,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "sky is clear",
                    "icon": "01d"
                }
            ],
            "speed": 6.73,
            "deg": 160,
            "clouds": 0,
            "uvi": 7.59
        }
    ]
  }
]
```

####GET /cities/:id
Will return the city corresponding to the id sent as paramether:
/cities/3992619
```json
{
    "id": 3992619,
    "coord": {
        "lon": -100.51667,
        "lat": 28.700001
    },
    "country": "MX",
    "geoname": {
        "cl": "P",
        "code": "PPL",
        "parent": 4013674
    },
    "name": "Piedras Negras",
    "stat": {
        "level": 1,
        "population": 139619
    },
    "stations": [
        {
            "id": 2575,
            "dist": 80,
            "kf": 1
        },
        {
            "id": 2598,
            "dist": 84,
            "kf": 1
        },
        {
            "id": 2618,
            "dist": 94,
            "kf": 1
        },
        {
            "id": 2666,
            "dist": 77,
            "kf": 1
        },
        {
            "id": 4007,
            "dist": 8,
            "kf": 1
        },
        {
            "id": 28781,
            "dist": 66,
            "kf": 1
        }
    ],
    "zoom": 8,
    "weather": [
        {
            "dt": 1489428000,
            "temp": {
                "day": 288.64,
                "min": 285.82,
                "max": 288.64,
                "night": 285.82,
                "eve": 288.64,
                "morn": 288.64
            },
            "pressure": 997.85,
            "humidity": 67,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "speed": 2.96,
            "deg": 28,
            "clouds": 76,
            "uvi": 8.7
        },
        {
            "dt": 1489514400,
            "temp": {
                "day": 293.16,
                "min": 285.16,
                "max": 296.15,
                "night": 287.94,
                "eve": 295.56,
                "morn": 285.16
            },
            "pressure": 1001.17,
            "humidity": 64,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "sky is clear",
                    "icon": "01d"
                }
            ],
            "speed": 6.73,
            "deg": 160,
            "clouds": 0,
            "uvi": 7.59
        }
    ]
}
```
####GET /cities/:id/:start/:end

/cities/3992619/2017-03-13/2017-03-15

Will return the city corresponding to the id with its weather filtered from the stat till the end period
```json
{
    "id": 3992619,
    "coord": {
        "lon": -100.51667,
        "lat": 28.700001
    },
    "country": "MX",
    "geoname": {
        "cl": "P",
        "code": "PPL",
        "parent": 4013674
    },
    "name": "Piedras Negras",
    "stat": {
        "level": 1,
        "population": 139619
    },
    "stations": [
        {
            "id": 2575,
            "dist": 80,
            "kf": 1
        },
        {
            "id": 2598,
            "dist": 84,
            "kf": 1
        },
        {
            "id": 2618,
            "dist": 94,
            "kf": 1
        },
        {
            "id": 2666,
            "dist": 77,
            "kf": 1
        },
        {
            "id": 4007,
            "dist": 8,
            "kf": 1
        },
        {
            "id": 28781,
            "dist": 66,
            "kf": 1
        }
    ],
    "zoom": 8,
    "weather": [
        {
            "dt": 1489428000,
            "temp": {
                "day": 288.64,
                "min": 285.82,
                "max": 288.64,
                "night": 285.82,
                "eve": 288.64,
                "morn": 288.64
            },
            "pressure": 997.85,
            "humidity": 67,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "speed": 2.96,
            "deg": 28,
            "clouds": 76,
            "uvi": 8.7
        },
        {
            "dt": 1489514400,
            "temp": {
                "day": 293.16,
                "min": 285.16,
                "max": 296.15,
                "night": 287.94,
                "eve": 295.56,
                "morn": 285.16
            },
            "pressure": 1001.17,
            "humidity": 64,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "sky is clear",
                    "icon": "01d"
                }
            ],
            "speed": 6.73,
            "deg": 160,
            "clouds": 0,
            "uvi": 7.59
        }
    ]
}
```
