import axios from 'axios'

export const getAirport = (iata) => {
  const options = {
    method: 'GET',
    url: 'https://airport-info.p.rapidapi.com/airport',
    params: { iata },
    headers: {
      'X-RapidAPI-Key': 'cba4d773b9mshb05a17a27922aa6p1a03f0jsn911fdb19e9ad',
      'X-RapidAPI-Host': 'airport-info.p.rapidapi.com',
    },
  }

  axios
    .request(options)
    .then(function(response) {
      console.log(response.data)
    })
    .catch(function(error) {
      console.error(error)
    })
}
