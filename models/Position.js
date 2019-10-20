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
    intvwdate1: String,
    intvwtime1: String,
    intvwphone1: String,
    intvwvirtual1: String,
    intvwperson1: String,
    intvwtbnt1: String,
    intvwdate2: String,
    intvwtime2: String,
    intvwphone2: String,
    intvwvirtual2: String,
    intvwperson2: String,
    intvwtbnt2: String,
    intvwdate3: String,
    intvwtime3: String,
    intvwphone3: String,
    intvwvirtual3: String,
    intvwperson3: String,
    intvwtbnt3: String,
    intvwdate4: String,
    intvwtime4: String,
    intvwphone4: String,
    intvwvirtual4: String,
    intvwperson4: String,
    intvwtbnt4: String,
    intvw1: String,
    intvw2: String,
    intvw3: String,
    intvw4: String,
    intvwques: String,
    followupmsg: String,
    gotthebag: Boolean,
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

