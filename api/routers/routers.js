const express = require('express')
const router = express.Router()


const userRouter = require('./user.router')
const authRouter = require('./auth.router')

router.use('/auth', authRouter)
router.use('/user', userRouter)


module.exports = router