var memoryController = require('memoryController');

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
        var indexOfNextCreepToSpawn = this.indexOfNextCreepToSpawn();
        var creepRole = currentSpawnerLevel.body[indexOfNextCreepToSpawn];
        return creepController.getCreepTemplateWithRole(creepRole);
     },

     getCurrentSpawnerLevelIndex: function(){
        return Memory.spawner.currentLevelIndex;
     },

     setCurrentSpawnerLevelIndex: function(newLevel){
        if(this.isValidSpawnerLevelIndex)
            Memory.spawner.currentLevelIndex = newLevel;
     },

     isValidSpawnerLevelIndex: function(level){
        return newLevel >= 0 && newLevel <= this.maxSpawnerLevel();
     },

     maxSpawnerLevel: function(){
        return Memory.spawner.levels.length - 1;
     },

     incrementSpawnerLevelIfApplicable: function(){
        this.setCurrentSpawnerLevelIndex(this.getCurrentSpawnerLevelIndex() + 1);
     },

     getCurrentLevel: function(){
        var currentSpawnerLevelIndex = this.getCurrentSpawnerLevelIndex();
        return Memory.spawner.levels[currentSpawnerLevel];
     },

     getCurrentBody: function(){
        return this.getCurrentLevel.body;
     },

     updateIndexOfNextCreepToSpawn: function(updateIfLast){
        var currentBodyLength = this.getCurrentBody().length;
        var newIndex = Memory.spawner.indexOfNextCreepToSpawn + 1;
        if(updateIfLast && currentBodyLength >= newIndex)
            this.incrementSpawnerLevelIfApplicable();

        Memory.spawner.indexOfNextCreepToSpawn = newIndex % currentBodyLength;

     }       
 };