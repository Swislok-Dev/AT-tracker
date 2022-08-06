const asyncHandler = require('express-async-handler')
const axios = require('axios')
require('dotenv').config()

const getFlightInfo = (req, res) => {
  const ident = req.params.ident.toUpperCase()
  axios
    .get(process.env.aeroapiURI + 'flights/' + ident, {
      headers: {
        Accept: 'application/json; charset=UTF-8',
        'x-apikey': process.env.aeroapiKey,
      },
    })
    .then((resp) => {
      res.status(200).send(resp.data['flights'])
    })
    .catch(() => {
      res.status(400).send({ message: 'The flight number is invalid' })
    })
}

module.exports = {
  getFlightInfo,
}
