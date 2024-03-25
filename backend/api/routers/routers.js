const express = require('express')
const router = express.Router()

const userRouter = require('./user.router')
const authRouter = require('./auth.router')
const digiRouter = require('./digimon.router')

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/digimon', digiRouter)



module.exports = router