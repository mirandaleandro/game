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
     
     setupStartFlags: function(){
         
        if(Memory.isStartupFlagsSet === undefined || Memory.isStartupFlagsSet === true)
        {
            //TODO this code must be refactored. Should no apply arbitrary rules to all rooms.
            _.forEach(Game.rooms, _.bind( function(room){
                console.log("room is here: " + room)
                room.createFlag(10, 30, 'AttackRange');
            }, this ));
            
            Memory.isStartupFlagsSet = false;
        }
     }
     
 }