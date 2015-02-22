 var _ = require('lodash');
 var Miner = require('MinerClass');
 var Transport = require('TransportClass');
 var Warrior = require('WarriorClass');
 var Nurse = require('NurseClass');
 var Builder = require('BuilderClass');
 var Assassin = require('AssassinClass');
 var Settler = require('SettlerClass');
 var SettlerCarrier = require('SettlerCarrierClass');
 var Legion = require('LegionClass');
 
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
            case "builder":
                return new Builder(creep);
            case "assassin":
                return new Assassin(creep);
            case "settler":
                return new Settler(creep);
            case "settler_carrier":
                return new SettlerCarrier(creep);
            case "legion":
                return new Legion(creep);
                
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