const Company = require('../models/Company')

const companyController = {
    index: (req, res) => {
        Company.find({})
            .then((companys) => {
                res.send(companys)
                console.log(companys)

            })
    },
    show: (req, res) => {
        Company.findById(req.params.companyId).populate('positions')
            .then((company) => {
                res.send(company)
            })
    },
    update: (req, res) => {
        Company.findByIdAndUpdate(req.params.companyId, req.body, { new: true })
            .then((updatedCompany) => {
                updatedCompany.save()
                res.send(updatedCompany)
            })
    },
    delete: (req, res) => {
        Company.findByIdAndDelete(req.params.companyId)
            .then(() => {
                res.send(200)
            })
    },
    create: (req, res) => {
        Company.create(req.body)
            .then((company) => {
                res.send(company)
            })
    }
}

module.exports = companyController