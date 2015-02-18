//Main code that holds the inital steps of the game logic

var gameController = require('gameController');
var memoryController = require('memoryController');    
var creepController = require('creepController');
var spawnerController = require('spawnerController');

gameController.init();
memoryController.init();
spawnerController.init();
creepController.init();
