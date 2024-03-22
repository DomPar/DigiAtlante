const router = require('express').Router()

const { 
    createUser,
    getAllUsers,
    getOneUser,
    updateUser,
    updatePassword,
    deleteUser,
    updateEmail,
    updateName,
    getOwnUser
} = require ('../controllers/user.controller')

const {
    checkAuth,
    CheckAdmin
} = require('../utils/middleware')

router.post('/', createUser)

router.get('/', getAllUsers)

router.get('/profile/:email', checkAuth, getOwnUser)

router.get('/:id', checkAuth, getOneUser)

router.put('/:id', checkAuth, updateUser)

router.patch('/pass/:id', checkAuth, updatePassword)

router.patch('/email/:id', checkAuth, updateEmail)

router.patch('/username/:id', checkAuth, updateName)

router.delete('/:id', checkAuth, deleteUser)


module.exports = router