const {Object} = require('../models/models')

class ObjectController {
    async create(req,res){
        const {
            name,
            addressCountry,
            addressRegion,
            addressDistrict,
            addressStreet,
            addressBuildingNumber,
            photo
        } = req.body
        const object =  await Object.create({
            name,
            addressCountry,
            addressRegion,
            addressDistrict,
            addressStreet,
            addressBuildingNumber,
            photo
        })
        return res.json(object)

    }
    async getAll(req,res){
        const objects = await Object.findAll()
        return res.json(objects)
    }

    async getOne(req,res){

    }

}
module.exports = new ObjectController()