const express = require('express')
const { getSession, createSession, deleteSession } = require('../controllers/session.controller')
const router = express.Router()

router.get('/get', getSession)
router.get('/set', createSession)
router.get('/destroy', deleteSession)

module.exports = router