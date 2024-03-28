const router = require('express').Router()

const {
    createDigimon,
    addPreEvo,
    addEvo,
    getAllDigimons,
    getOneDigimon,
    updateDigimon,
    deleteDigimon,
    getAllPreEvo,
    getAllEvo,
    getAllVar,    
} = require('../controllers/digimon.controller')

router.post('/', createDigimon)

router.post('/pre', addPreEvo)

router.post('/evo', addEvo)

router.get('/', getAllDigimons)

router.get('/pre/:id', getAllPreEvo)

router.get('/evo/:id', getAllEvo)

router.get('/var/:id', getAllVar)

router.get('/:id', getOneDigimon)

router.put('/:id', updateDigimon)

router.delete('/:id', deleteDigimon)

module.exports = router 