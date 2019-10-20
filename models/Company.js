const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Company = new Schema({
  index: Number,
  companyname: String,
  idnumber: String, 
  email: String,
  phone: String,
  positions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Position"
    }
  ]
})

module.exports = mongoose.model('Company', Company)