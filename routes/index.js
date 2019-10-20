const express = require('express')
const router = express.Router()
const companyController = require('../controllers/companyController')
const positionsController = require('../controllers/positionsController')
const allClientController = require('../controllers/allClientController')
var passport = require('passport');
var nodemailer = require('nodemailer');
const creds = require('../config/config');

router.get('/api/companys', companyController.index)
router.post('/api/companys', companyController.create)
router.get('/api/companys/:companyId', companyController.show)
router.patch('/api/companys/:companyId', companyController.update)
router.delete('/api/companys/:companyId', companyController.delete)
// router.patch('/api/companys/:companyId/profile', companyController.update)

/* GET Google Authentication API. */
router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/", session: false }),
    function(req, res) {
        var token = req.user.token;
        res.redirect("http://localhost:3000?token=" + token);
    }
);

router.get('/api/companys/:companyId', positionsController.index)
router.get('/api/companys/:companyId/:positionId', positionsController.show)
router.delete('/api/positions/:positionId', positionsController.delete)
router.patch('/api/positions/:positionId', positionsController.update)
router.post('/api/companys/:companyId/positions', positionsController.create)


var transport = {
    host: 'smtp.gmail.com',
    auth: {
      user: creds.USER,
      pass: creds.PASS
    }
  }
  
  var transporter = nodemailer.createTransport(transport)
  
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });
  
  router.post('/api/home', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${content} `
  
    var mail = {
      from: name,
      to: 'sceneitpix@gmail.com',  //Change to email address that you want to receive messages on
      subject: 'New Message from Contact Form',
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })
// router.get('/api/positions/:positionId', allClientController.index)
// router.get('/api/positions/:positionId', allClientController.show)
// router.delete('/api/allClients/:allClientId', allClientController.delete)
// router.patch('/api/allClients/:allClientId', allClientController.update)
// router.post('/api/positions/:positionId/allClientId', allClientController.create)


module.exports = router