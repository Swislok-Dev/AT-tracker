const express = require('express')
const router = express.Router()
const { getFlightInfo } = require('../controllers/flightsController')

router.get('/:ident', getFlightInfo)

module.exports = router
