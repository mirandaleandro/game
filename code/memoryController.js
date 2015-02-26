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
            this.initDefendPositions();
            Memory.resetData = false;
        }
            
     },
     
     initDefendPositions: function(){
         Memory.LegionPositions = [
             {
                name:"LegionPosition0",
                x:38,
                y:44
             },
             {
                name:"LegionPosition0",
                x:38,
                y:43
             },
             {
                name:"LegionPosition0",
                x:38,
                y:42
             },
             {
                name:"LegionPosition0",
                x:39,
                y:42
             },
             {
                name:"LegionPosition0",
                x:40,
                y:42
             },
             {
                name:"LegionPosition0",
                x:41,
                y:42
             }];
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
                body: [Game.ATTACK, Game.ATTACK, Game.MOVE, Game.MOVE],
                nameTemplate:"Swordsman",
                count:0
             },
             {
                role:'archer',
                body:[Game.RANGED_ATTACK, Game.RANGED_ATTACK, Game.MOVE, Game.MOVE],
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
                body: [Game.HEAL, Game.HEAL, Game.HEAL,  Game.MOVE, Game.MOVE],
                nameTemplate:"Nurse",
                count:0
             },
             {
                role:'builder',
                body: [Game.WORK, Game.WORK, Game.CARRY, Game.CARRY, Game.MOVE],
                nameTemplate:"Builder",
                count:0
             },
             {
                role:'assassin',
                body: [Game.ATTACK, Game.ATTACK, Game.ATTACK, Game.MOVE, Game.MOVE],
                nameTemplate:"Assassin",
                count:0
             },
             {
                role:'settler',
                body: [Game.WORK, Game.WORK, Game.CARRY, Game.WORK, Game.MOVE],
                nameTemplate:"Settler",
                hasVisitedSpawn: false,
                count:0
             },
             {
                role:'settler_carrier',
                body: [Game.CARRY, Game.CARRY, Game.CARRY, Game.CARRY, Game.MOVE],
                nameTemplate:"SettlerCarrier",
                hasVisitedSpawn: false,
                count:0
             },
             {
                role:'legion',
                body: [Game.TOUGH, Game.TOUGH, Game.TOUGH, Game.TOUGH, Game.TOUGH, Game.TOUGH, Game.TOUGH, Game.TOUGH, Game.TOUGH, Game.TOUGH, Game.TOUGH, Game.TOUGH, Game.TOUGH, Game.TOUGH, Game.TOUGH, Game.TOUGH, Game.TOUGH, Game.TOUGH, Game.TOUGH, Game.TOUGH, Game.ATTACK, Game.ATTACK, Game.ATTACK, Game.ATTACK, Game.MOVE],
                nameTemplate:"Legion",
                hasVisitedSpawn: false,
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
                    buildQueue:['miner','transport', 'miner','settler', 'builder', 'settler_carrier']
                },
                {
                    buildQueue:['swordsman','nurse','swordsman']
                },
                {
                    buildQueue:['legion']   
                }
            ]
        }
     }

 }