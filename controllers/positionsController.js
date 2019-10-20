const Company = require('../models/Company')
const Position = require('../models/Position')

const positionsController = {
    index: (req, res) => {
        var companyId = req.params.companyId
        Company.findById(req.params.companyId).populate('positions')
            .then((company) => {
                res.send(company.positions)
            })
    },
    show: (req, res) => {
        var positionId = req.params.positionId
        Position.findById(positionId)
            .then((position) => {
                res.send(position)
            })
    },
    
    delete: (req, res) => {
        var positionId = req.params.positionId
        Position.findByIdAndDelete(positionId)
            .then(() => {
                res.send(200)
            })
    },
    update: (req, res) => {
        var positionId = req.params.positionId
        Position.findByIdAndUpdate(positionId, req.body, { new: true })
            .then((updatedPosition) => {
                updatedPosition.save()
                res.send(updatedPosition)
            })
    },
    create: (req, res) => {
        var companyId = req.params.companyId
        Company.findById(companyId)
            .then((company) => {
                console.log(company)
                Position.create(req.body)
                    .then((newPosition) => {
                        console.log(newPosition)
                        company.positions.push(newPosition)
                        company.save()
                        res.send(newPosition)
                    })
            })
    }

}

module.exports = positionsController