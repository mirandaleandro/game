var _ = require("lodash");
var memoryController = require('memoryController');
var creepController = require('creepController');

module.exports = {
     
     init:function(){
         this.currentSpawner = Game.spawns.Spawn1;
         if(!this.currentSpawner.spawning)
            this.spawnCreep();
     },

     spawnCreep: function(){
        var screepTemplateInMemory = this.getNextCreepConfiguration();
        var creepName = screepTemplateInMemory.nameTemplate.concat(screepTemplateInMemory.count);
        var creepMetadata = { role:screepTemplateInMemory.role };
        var spawningResult = this.currentSpawner.createCreep(screepTemplateInMemory.body, creepName, creepMetadata);
        this.validateSpawningResult(spawningResult, screepTemplateInMemory);
     },
     
     validateSpawningResult: function(spawningResult, screepTemplateInMemory){
        if(_.isString(spawningResult)){
            console.log("Creep created: " + spawningResult);
            screepTemplateInMemory.count++;
            this.updateIndexOfNextCreepToSpawn(true);
        }
        else{
            console.log("Error in creating the creep " + spawningResult); 
        }
     },
     
     getNextCreepConfiguration: function(){
        var currentSpawnerLevel = this.getCurrentLevel();
        var indexOfNextCreepToSpawn = this.getIndexOfNextCreepToSpawn();
        var creepRole = currentSpawnerLevel.buildQueue[indexOfNextCreepToSpawn];
        return creepController.getCreepTemplateWithRole(creepRole);
     },

     getCurrentSpawnerLevelIndex: function(){
        return Memory.spawner.currentLevelIndex;
     },

     setCurrentSpawnerLevelIndex: function(newLevel){
        if(this.isValidSpawnerLevelIndex(newLevel))
            Memory.spawner.currentLevelIndex = newLevel;
     },

     isValidSpawnerLevelIndex: function(level){
        return level >= 0 && level <= this.maxSpawnerLevel();
     },

     maxSpawnerLevel: function(){
        return Memory.spawner.levels.length - 1;
     },

     incrementSpawnerLevelIfApplicable: function(){
        this.setCurrentSpawnerLevelIndex(this.getCurrentSpawnerLevelIndex() + 1);
     },

     getCurrentLevel: function(){
        var currentSpawnerLevelIndex = this.getCurrentSpawnerLevelIndex();
        return Memory.spawner.levels[currentSpawnerLevelIndex];
     },

     getCurrentBody: function(){
        return this.getCurrentLevel().buildQueue;
     },

     getIndexOfNextCreepToSpawn: function(){
        return Memory.spawner.indexOfNextCreepToSpawn;
     },

     updateIndexOfNextCreepToSpawn: function(updateIfLast){
        var currentBodyLength = this.getCurrentBody().length;
        var newIndex = this.getIndexOfNextCreepToSpawn() + 1;
        if(updateIfLast && currentBodyLength <= newIndex)
            this.incrementSpawnerLevelIfApplicable();
        Memory.spawner.indexOfNextCreepToSpawn = newIndex % currentBodyLength;

     }       
 };