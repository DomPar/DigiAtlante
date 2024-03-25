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

const updateDigimon = async (req,res) => {
    try{
        const [result] = await Digi.update(req.body, {
            where: {
                id:req.params.id
            },
        })
        if(!result) {
            return res.status(404).send('Digimon not found')
        } else {
        res.status(200).json({
            message: 'Digimon updated succesfully',
            result: req.body
        }) 
    }
    }catch(error){
       res.status(200).json({
        message: 'Error updating Digimon',
        result: error
       }) 
    }
}

const deleteDigimon = async (req, res) => {
    try{
        const digimon = await Digi.destroy({
            where: {
                id: req.params.id
            }
        })
        if(!digimon) {
            return res.status(404).send('Digimon not found')
        } else {
            res.status(200).json({
           message: 'Digimon deleted succesfully',
           result: digimon     
            })
        }
    }catch(error){
        res.status(500).json({
            message: 'Error deleting Digimon',
            result: error
        })
    }
}

module.exports= {
createDigimon,
getAllDigimons,
getOneDigimon,
updateDigimon,
deleteDigimon
}