const router = require('express').Router()

const {
    createDigimon,
    getAllDigimons,
    getOneDigimon,
    updateDigimon,
    deleteDigimon
} = require('../controllers/digimon.controller')

router.post('/', createDigimon)

router.get('/', getAllDigimons)

router.get(':id', getOneDigimon)

router.put(':id', updateDigimon)

router.delete('/id', deleteDigimon)

module.exports = router