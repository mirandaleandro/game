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
         this.setupStartFlags();
     },
     
     isFirstTick: function(){
        return Game.flags.GameHasStarted === undefined; 
     },
     
     setupStartFlags: function(){
        if(this.isFirstTick())
        {
            //TODO this code must be refactored. Should no apply arbitrary rules to all rooms.
            _.forEach(Game.rooms, _.bind( function(room){
                console.log("setting room flags.");
                room.createFlag(0, 0, 'GameHasStarted');
                room.createFlag(10, 26, 'AttackRange');
                room.createFlag(7, 33, 'Flag1');
                room.createFlag(4, 32, 'Flag2');
                console.log("room flags set.");
            }, this ));
            
            Memory.isStartupFlagsSet = false;
        }
     }
     
 }