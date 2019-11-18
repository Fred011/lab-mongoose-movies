var express = require('express');
var router = express.Router();
const Celebrity = require('./../models/Celebrity')


// GET /celebrities 
router.get('/celebrities/index', function(req, res, next) {
  Celebrity.find()
    .then( (allCelebritiesFromDB) => {
      res.render('celebrities/index', { allCelebritiesFromDB });
    })
    .catch( (err) => console.log(err));
 });

 module.exports = rooter;