const express = require('express')
const router = express.Router()

router.get('/:ident', (req, res) => {
  if (req.params.ident == ':ident') {
    res.status(400).json({ message: 'identifier is missing' })
  } else {
    res
      .status(200)
      .json({ message: `Get flight details for flight ${req.params.ident}` })
  }
})

module.exports = router
