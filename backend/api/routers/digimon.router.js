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
    introduceDigi,
    addVar,
    getAllDigimonsByAttribute,
    getAllDigimonsByLevel,
    getAllDigimonsById
} = require('../controllers/digimon.controller')

router.post('/', createDigimon)

router.post('/digimon', introduceDigi)

router.post('/pre', addPreEvo)

router.post('/evo', addEvo)

router.post('/var', addVar)

router.get('/', getAllDigimons)

router.get('/id', getAllDigimonsById)

router.get('/level/', getAllDigimonsByLevel)

router.get ('/attribute/', getAllDigimonsByAttribute)

router.get('/pre/:id', getAllPreEvo)

router.get('/evo/:id', getAllEvo)

router.get('/var/:id', getAllVar)

router.get('/:id', getOneDigimon)

router.put('/:id', updateDigimon)

router.delete('/:id', deleteDigimon)

module.exports = router 