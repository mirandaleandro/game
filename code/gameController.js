/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('gameController'); // -> 'a thing'
 */
 var _ = require('lodash');
 
 module.exports = {
     
     init: function(){
         this.room = this.getRoom();
         this.setupStartStructures();
     },
     
     isFirstTick: function(){
        return Game.flags.GameHasStarted === undefined; 
     },
     
     setupStartStructures: function(){
        if(this.isFirstTick())
        {
            console.log("setting room flags.");
            this.room.createFlag(0, 0, 'GameHasStarted');
            this.room.createFlag(10, 26, 'AttackRange');
            this.room.createFlag(36, 38, 'Flag1');
            this.room.createFlag(34, 35, 'Flag2');
            console.log("room flags set.");
            
            console.log("setting room structures.");
            this.room.createConstructionSite(37, 44, Game.STRUCTURE_WALL);
            this.room.createConstructionSite(37, 43, Game.STRUCTURE_WALL);
            this.room.createConstructionSite(37, 42, Game.STRUCTURE_WALL);
            this.room.createConstructionSite(38, 41, Game.STRUCTURE_WALL);
            //this.room.createConstructionSite(39, 41, Game.STRUCTURE_WALL);
            this.room.createConstructionSite(40, 41, Game.STRUCTURE_WALL);
            this.room.createConstructionSite(41, 41, Game.STRUCTURE_WALL);
            this.room.createConstructionSite(42, 41, Game.STRUCTURE_WALL);
            this.room.createConstructionSite(7, 47, Game.STRUCTURE_SPAWN);
            console.log("room structures set.");
            Memory.isStartupFlagsSet = true;
        }
     },
     
     getRoom: function(){
        return _.values(Game.rooms)[0]; 
     }
     
 }