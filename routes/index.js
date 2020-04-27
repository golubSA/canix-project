const express = require('express');
const router = express.Router();
const reqlib = require('app-root-path').require;
const logger = reqlib('logger');
const os = require("os");
const hostname = os.hostname();

const util = require('util')
const chance = require('chance')
const faker = require('faker')

const packageGenVersion = require('../lib/version.js') 
const instance_id = process.env.NODE_APP_INSTANCE || 0 


/* GET home page. */
router.get('/', (req, res) => {
	res.render('index', 
		  { company:  'Canix', 
			year: 2020,
			author: 'Golub Sergey'
	  	});

  
});

module.exports = router;
