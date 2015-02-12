/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('memoryController'); // -> 'a thing'
 */
 var gameController = require('gameController');
 
 module.exports = {
     
     init:function(){
         
        if(gameController.isFirstTick)
        {
            this.initCreepMemory();    
            this.initSpawnerMemory();
            
            
        }
            
     },
     initCreepMemory: function(){
         
         Memory.creepTemplate = [
             {
                role:'warrior',
                body: [Game.ATTACK, Game.ATTACK, Game.MOVE],
                nameTemplate:"Warrior{0}",
                count:0
             },
             {
                role:'swordsman',
                body: [Game.ATTACK, Game.ATTACK, Game.ATTACK, Game.ATTACK, Game.MOVE],
                nameTemplate:"Swordsman{0}",
                count:0
             },
             {
                role:'archer',
                body:[Game.RANGED_ATTACK, Game.RANGED_ATTACK, Game.MOVE],
                nameTemplate:"Archer{0}",
                count:0
             },
             {
                role:'longbowman',
                body:[Game.RANGED_ATTACK, Game.RANGED_ATTACK, Game.RANGED_ATTACK, Game.RANGED_ATTACK, Game.MOVE],
                nameTemplate:"Longbowman{0}",
                count:0
             },
             {
                role:'miner',
                body: [Game.WORK, Game.WORK, Game.WORK, Game.WORK, Game.MOVE],
                nameTemplate:"Miner{0}",
                count:0
             },
             {
                role:'transport',
                body: [Game.CARRY, Game.CARRY, Game.CARRY, Game.CARRY, Game.MOVE],
                nameTemplate:"Transport{0}",
                count:0
             }
        ];
         
     },  
     initSpawnerMemory: function (){
        
        Memory.spawner = {
            
            currentLevelIndex: 0,
            indexOfNextCreepToSpawn: 0,

            levels:[
                {
                    build:['miner','transport','miner']
                },
                {
                    build:['warrior','warrior','warrior']
                }
            ]
        }
     }

 }