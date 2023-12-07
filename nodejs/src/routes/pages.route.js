const express = require('express')
const { getViewUser  } = require('../controllers/user.controller')
const router  = express.Router()

router.get('/user', getViewUser )

module.exports = router