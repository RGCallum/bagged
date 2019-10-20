const Company = require('../models/Company.js')
const Position = require('../models/Position.js')
const AllClient = require('../models/AllClient.js')
const mongoose = require('./connections')


const position1 = new Position({

    jobtitle: 'Engineer',
    dateapplied: 06/01/2019,
    contactname: 'Sam Smith',
    contactjob: "VP of Engineering",
    contactemail: 'sam@smith.com',
    contactphone: '(555)555-5555',
    joburl: 'www.bagged.herokuapp.com',
    jobsummary: 'stuff and stuff and more stuff',
    jobsalary: '70k',
    coverletter: '',
    intvwdate: 09/16/2019,
    intvwtime: '10:30am',
    intvwtype: '',
    intvw1: '',
    intvw2: '',
    intvw3: '',
    intvw4: '',
    intvwques: 'How awesome is this job?',
    followupmsg: "Thanks you're awesome",
    gotthebag: '',
    nexttime: '',
    tostudy: 'java',

})

const position2 = new Position({
   
    jobtitle: 'Engineer',
    dateapplied: 07/01/2019,
    contactname: 'John David',
    contactjob: "VP of Engineering",
    contactemail: 'john@david.com',
    contactphone: '(555)555-5555',
    joburl: 'www.bagged.herokuapp.com',
    jobsummary: 'stuff and stuff and more stuff',
    jobsalary: '60k',
    coverletter: '',
    intvwdate: 09/26/2019,
    intvwtime: '11:30am',
    intvwtype: '',
    intvw1: '',
    intvw2: '',
    intvw3: '',
    intvw4: '',
    intvwques: 'How awesome is this job?',
    followupmsg: "Thanks you're awesome",
    gotthebag: '',
    nexttime: '',
    tostudy: 'angular',
})

const position3 = new Position({
    
    jobtitle: 'Developer',
    dateapplied: 08/01/2019,
    contactname: 'Sam Jenkins',
    contactjob: "Founder",
    contactemail: 'sam@jenkins.com',
    contactphone: '(555)555-5555',
    joburl: 'www.bagged.herokuapp.com',
    jobsummary: 'stuff and stuff and more stuff',
    jobsalary: '80k',
    coverletter: '',
    intvwdate: 01/16/2019,
    intvwtime: '10:00am',
    intvwtype: '',
    intvw1: '',
    intvw2: '',
    intvw3: '',
    intvw4: '',
    intvwques: 'How awesome is this job?',
    followupmsg: "Thanks you're awesome",
    gotthebag: '',
    nexttime: '',
    tostudy: 'java',
})


const company1 = new Company({
    companyname: 'BlackRock',
    website: 'www.blackrock.com', 
    careerpage: 'www.blackrock.com/careers',
    location: 'ATL', 
    maincontact: 'Mike Willmadeit', 
    email: 'mike@blackrock.com',
    phone: '(555) 555-5555',
    positions: [position1]
})
const company2 = new Company({
    companyname: 'Cox Media',
    website: 'www.cox.com', 
    careerpage: 'www.cox.com/careers',
    location: 'Remote', 
    maincontact: 'Mike Stit', 
    email: 'mike@cox.com',
    phone: '(555) 555-5555',
    positions: [position2]
})
const company3 = new Company({
    companyname: 'Home Depot',
    website: 'www.homedepot.com', 
    careerpage: 'www.homedepot.com/careers',
    location: 'Atlanta', 
    maincontact: 'John Johnson', 
    email: 'john@homedepot.com',
    phone: '(555) 555-5555',
    positions: [position3]
})



Company.remove({})
    .then(() => Position.remove({}))
    .then(() => Position.insertMany([position1, position2, position3]))
    .then(() => company1.save())
    .then(() => company2.save())
    .then(() => company3.save())
    .then(() => console.log("Database seeded successfully"))
    .then(() => mongoose.connection.close()) 