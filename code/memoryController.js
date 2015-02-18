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
        if( gameController.isFirstTick() || Memory.resetData === undefined || Memory.resetData === true)
        {
            this.initCreepMemory();    
            this.initSpawnerMemory();
            Memory.resetData = false;
        }
            
     },
     
     initCreepMemory: function(){
         
         Memory.creep = [
             {
                role:'warrior',
                body: [Game.ATTACK, Game.MOVE],
                nameTemplate:"Warrior",
                count:0
             },
             {
                role:'swordsman',
                body: [Game.ATTACK, Game.ATTACK, Game.ATTACK, Game.MOVE, Game.MOVE],
                nameTemplate:"Swordsman",
                count:0
             },
             {
                role:'archer',
                body:[Game.RANGED_ATTACK, Game.RANGED_ATTACK, Game.TOUGH, Game.MOVE, Game.MOVE],
                nameTemplate:"Archer",
                count:0
             },
             {
                role:'longbowman',
                body:[Game.RANGED_ATTACK, Game.RANGED_ATTACK, Game.RANGED_ATTACK, Game.RANGED_ATTACK, Game.MOVE],
                nameTemplate:"Longbowman",
                count:0
             },
             {
                role:'miner',
                body: [Game.WORK, Game.WORK, Game.WORK, Game.CARRY, Game.MOVE],
                nameTemplate:"Miner",
                count:0
             },
             {
                role:'transport',
                body: [Game.CARRY, Game.CARRY, Game.MOVE, Game.MOVE],
                nameTemplate:"Transport",
                count:0
             },
             {
                role:'nurse',
                body: [Game.HEAL, Game.HEAL, Game.TOUGH, Game.MOVE, Game.MOVE],
                nameTemplate:"Nurse",
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
                    buildQueue:['miner','transport']
                },
                {
                    buildQueue:['swordsman','swordsman','nurse']
                },
                {
                    buildQueue:['swordsman','swordsman','swordsman','swordsman','swordsman','swordsman', 'nurse']
                }, 
                {
                    buildQueue:['swordsman']
                }
            ]
        }
     }

 }