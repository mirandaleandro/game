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
         this.setupStartStructures();
     },
     
     isFirstTick: function(){
        return Game.flags.GameHasStarted === undefined; 
     },
     
     setupStartStructures: function(){
        if(this.isFirstTick())
        {
            //TODO this code must be refactored. Should no apply arbitrary rules to all rooms.
            _.forEach(Game.rooms, _.bind( function(room){
                console.log("setting room flags.");
                room.createFlag(0, 0, 'GameHasStarted');
                room.createFlag(10, 26, 'AttackRange');
                room.createFlag(35, 44, 'Flag1');
                room.createFlag(35, 46, 'Flag2');
                console.log("room flags set.");
                
                console.log("setting room structures.");
                room.createConstructionSite(38, 44, Game.STRUCTURE_WALL);
                room.createConstructionSite(39, 43, Game.STRUCTURE_WALL);
                room.createConstructionSite(40, 42, Game.STRUCTURE_WALL);
                room.createConstructionSite(42, 42, Game.STRUCTURE_WALL);
                room.createConstructionSite(7, 47, Game.STRUCTURE_SPAWN);
                console.log("room structures set.");
            }, this ));
            
            Memory.isStartupFlagsSet = true;
        }
     }
     
 }