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

const getAllPreEvo = async (req, res) => {
    try{
        const digimons = await Digi.findAll({
            where: {
                id: req.params.id
            },
            include: {
                model: Digi,
                as: "ChildPre"
            }
        })
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

const getAllEvo = async (req, res) => {
    try{
        const digimons = await Digi.findAll({
            where: {
                id: req.params.id
            },
            include: {
                model: Digi,
                as: "ChildEvo"
            }
        })
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

const getAllVar = async (req, res) => {
    try{
        const digimons = await Digi.findAll({
            where: {
                id: req.params.id
            },
            include: {
                model: Digi,
                as: "ChildVar"
            }
        })
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
        const digimon = await Digi.findByPk(req.params.id)
        res.status(200).json({
            message: 'One Digimon',
            result: digimon
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

const addPreEvo = async (req, res) => {
    try {
        const currentDigi = await Digi.findByPk(req.body.parentId);
        const preEvoDigi = await Digi.findByPk(req.body.preevoId);
        
        await preEvoDigi.addParentPre(currentDigi)
        
        res.status(200).json({
            message: 'Evo set succesfully',
            result: req.body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error setting evolution Digimon',
            result: error
        })
    }
}

const addEvo = async (req, res) => {
    try {
        const currentDigi = await Digi.findByPk(req.body.parentId);
        const evoDigi = await Digi.findByPk(req.body.evoId);
        
        await evoDigi.addParentEvo(currentDigi)
        
        res.status(200).json({
            message: 'Evo set succesfully',
            result: req.body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error setting evolution Digimon',
            result: error
        })
    }
}

module.exports= {
createDigimon,
getAllDigimons,
getOneDigimon,
updateDigimon,
deleteDigimon,
addPreEvo,
addEvo,
getAllPreEvo,
getAllEvo,
getAllVar
}