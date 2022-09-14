const express = require('express')
const app = express()
const session = require('express-session')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const router = require('express').Router()

router.use('/candidates', require('./candidates'))
router.use('/sessions', require('./sessions'))
router.use('/userDatabase', require('./userDatabase'))


router.use(express.json())
router.use(express.urlencoded({ extended: false }))


module.exports = router
// todo: error handling
