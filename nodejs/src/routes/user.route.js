const express = require('express')
const { getAllUsers,createUser, updateUser, deleteUser  } = require('../controllers/user.controller')
const router  = express.Router()
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });



router.get('/all', getAllUsers )
router.post('/', createUser )
router.put('/:id', updateUser )
router.delete('/:id', deleteUser )

module.exports = router
