var memoryController = require('memoryController');
var creepController = require('creepController');

module.exports = {
     
     init:function(){
         this.currentSpawner = Game.spawns.Spawn1;
         if(!this.currentSpawner.spawning)
            this.spawnCreep();
         else
            console.log("Current spawner is spawning");
     },

     spawnCreep: function(){
        var screepConfiguration = this.getNextCreepConfiguration();
        this.currentSpawner.createCreep(screepConfiguration.body, screepConfiguration.name, screepConfiguration.metadata);
        this.updateIndexOfNextCreepToSpawn(true);
        //this.currentSpawner.createCreep([Game.WORK, Game.WORK, Game.WORK, Game.WORK, Game.MOVE], "Miner2", {role:"miner"});
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
        if(updateIfLast && currentBodyLength >= newIndex)
            this.incrementSpawnerLevelIfApplicable();

        Memory.spawner.indexOfNextCreepToSpawn = newIndex % currentBodyLength;

     }       
 };     