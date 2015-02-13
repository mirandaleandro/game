//Main code that holds the inital steps of the game logic

var memoryController = require('memoryController');    
var gameController = require('gameController');
var creepController = require('creepController');
var spawnerController = require('spawnerController');

memoryController.init();
gameController.init();
spawnerController.init();
creepController.init();
