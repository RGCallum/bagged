const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Position = new Schema({
    jobtitle: String,
    dateapplied: String,
    contactname: String,
    contactjob: String,
    contactemail: String,
    contactphone: String,
    joburl: String,
    jobsummary: String,
    jobsalary: String,
    coverletter: 'String',
    intvwdate: String,
    intvwtime: String,
    intvwtype: String,
    intvw1: String,
    intvw2: String,
    intvw3: String,
    intvw4: String,
    intvwques: String,
    followupmsg: String,
    gotthebag: String,
    nexttime: String,
    tostudy: String,
    foundon: String,
    
    allClients: [
        {
          type: Schema.Types.ObjectId,
          ref: "AllClient"
        }
      ]
})

module.exports = mongoose.model('Position', Position)

