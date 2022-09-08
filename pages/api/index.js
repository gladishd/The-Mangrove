const router = require('express').Router()

router.use('/candidates', require('./candidates'))

module.exports = router
// todo: error handling
