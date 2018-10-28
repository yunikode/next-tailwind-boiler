const express = require('express')
const router = express.Router()

router.get('/movies', (req, res) => {
  res.end('We made it!')
})

module.exports = router
