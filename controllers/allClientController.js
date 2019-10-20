const Position = require('../models/Position')
const AllClient = require('../models/AllClient')

const allClientController = {
    index: (req, res) => {
        var positionId = req.params.positionId
        Position.findById(positionId).populate('allClients')
            .then((position) => {
                res.send(position.allClients)
            })
    },
    show: (req, res) => {
        var allClientId = req.params.allClientId
        AllClient.findById(allClientId)
            .then((allClient) => {
                res.send(allClient)
            })
    },
    delete: (req, res) => {
        var allClientId = req.params.allClientId
        AllClient.findByIdAndDelete(allClientId)
            .then(() => {
                res.send(200)
            })
    },
    update: (req, res) => {
        var allClientId = req.params.allClientId
        AllClient.findByIdAndUpdate(allClientId, req.body, { new: true })
            .then((updatedPosition) => {
                updatedPosition.save()
                res.send(updatedPosition)
            })
    },
    create: (req, res) => {
        var positionId = req.params.positionId
        Position.findById(positionId)
            .then((position) => {
                console.log(position)
                AllClient.create(req.body)
                    .then((newPosition) => {
                        console.log(newPosition)
                        position.allClients.push(newPosition)
                        position.save()
                        res.send(newPosition)
                    })
            })
    }

}

module.exports = allClientController