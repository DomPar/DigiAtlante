const router = require('express').Router()

const {
    createDigimon,
    addPreEvo,
    addEvo,
    getAllDigimons,
    getOneDigimon,
    updateDigimon,
    deleteDigimon,    
} = require('../controllers/digimon.controller')

router.post('/', createDigimon)

router.post('/pre', addPreEvo)

router.post('/evo', addEvo)

router.get('/', getAllDigimons)

router.get('/:id', getOneDigimon)

router.put('/:id', updateDigimon)

router.delete('/:id', deleteDigimon)

module.exports = router 