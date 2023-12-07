const express = require('express')
const { getCookie, clearCookie } = require('../controllers/cookie.controller')
const router  = express.Router()

router.get('/', getCookie)
router.delete('/', clearCookie)

module.exports = router
