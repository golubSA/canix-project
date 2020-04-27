const express = require('express');
const router = express.Router();
const reqlib = require('app-root-path').require;
const logger = reqlib('logger');

const jsf = require('json-schema-faker');
const util = require('util')
const chance = require('chance')
const faker = require('faker')
jsf.extend('chance', () => new chance.Chance());
jsf.extend('faker', () => faker);

var recentDays = 5;

var schema = {
	"type": "array",
	"minItems": 10,
	"maxItems": 20,
	"items": {
		"type": "object",
		"properties": {
		  "name": {
			"type": "string",
			"faker": "name.findName"
		  },
		  "price": {
			"type": "integer",
			"minimum": 100,
			"maximum": 999
		  },
		  "amount": {
			  "type": "integer",
			  "minimum": 10,
			  "maximum": 999
			},
		},
		"required": [
		  "name",
		  "price", 
		  "amount",
		 ]
		}
  };

/* GET home page. */
router.get('/', (req, res) => {

  jsf.resolve(schema).then(sample => {
  	   logger.debug(util.inspect(sample, 
  	   	{showHidden: false, depth: null}));
	   
	   res.render('shoppers', 
	  	{ projects:  sample });
  });

  
});

module.exports = router;
