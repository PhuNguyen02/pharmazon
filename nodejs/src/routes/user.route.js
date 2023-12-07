const express = require('express')
const { registerUser, loginUser, getAllUsers,createUser, updateUser, deleteUser, uploadFile  } = require('../controllers/user.controller')
const router  = express.Router()
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/upload-avatar', upload.single('avatar') ,uploadFile)

router.get('/all', getAllUsers )
router.post('/', createUser )
router.put('/:id', updateUser )
router.delete('/:id', deleteUser )

module.exports = router
