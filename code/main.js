//Main code that holds the inital steps of the game logic

var utils = require('utils'); 

var memoryController = require('memoryController');    
var gameController = require('gameController');
var creepController = require('creepController');
var spawnerController = require('spawnerController');

utils.init();
memoryController.init();
gameController.init();
spawnerController.init();
creepController.init();


