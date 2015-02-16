 var _ = require('lodash');
 var Miner = require('MinerClass');
 var Transport = require('TransportClass');
 var Warrior = require('WarriorClass');
 var Nurse = require('NurseClass');
 
 module.exports = {
     
     init: function(){
         this.iterateCreeps();
     },
     
     iterateCreeps:function(){
         _.forEach(Game.creeps, _.bind( this.initCreepFromMemory, this ));
     },
     
     initCreepFromMemory: function(creep){
        var currentCreep = this.creepFactory(creep);
        currentCreep.init();
     },
     
     creepFactory: function(creep){
        
        switch(creep.memory.role){
            case "miner":
                return new Miner(creep);
            case "transport":
                return new Transport(creep);
            case "warrior":
            case "swordsman":
                return new Warrior(creep);
            case "nurse":
                return new Nurse(creep);
                
            default:
                return {
                    init: function(){
                        //console.log("trying to create object with role as: " + creep.role);
                    }
                }
         }
     },
     
     getCreepTemplateWithRole: function(role){
     	return Memory.creep.filter( function(creepTemplate){ return creepTemplate.role == role; } )[0];
     }
 }