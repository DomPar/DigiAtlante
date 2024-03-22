const Digi = require('../models/digimon.model')

const createDigimon = async (req, res) => {

    try{
        const digimon = await Digi.create(req.body)
        res.status(200).json({
            message:'Digimon created',
            result: digimon
        })
    } catch (error) {
        res.status(500).json({
            message:'error creating digimon',
            result: error
        })
    }
}

const getAllDigimons = async (req, res) => {
    try{
        const digimons = await Digi.findAll()
        res.status(200).json({
            message: 'Here are all Digimons',
            result: digimons
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error getting digimons',
            result: error
        })
    }
}

const getOneDigimon = async (req, res) => {
    try{
        const digimons = await Digi.findByPk(req.params.id)

        res.status(200).json({
            message: 'One Digimon',
            result: digimons
        })
    }catch(error){
    res.status(500).json({
        message: 'Error getting one digimon',
        result: error
    })
    }
}