/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('NurseClass'); // -> 'a thing'
 */
 
 var _ = require("lodash");
 
  module.exports = function(creep){
    this.creep = creep;
    
    
    this.init = function(){
        this.closeRangeCreeps = this.findCreepsInRange(1);
        this.longRangeCreeps = this.findCreepsInRange(3);
        this.startHealArmyMode();
    }

    this.startHealArmyMode = function(){
        this.creep.moveTo(Game.flags.Flag2);
        if(this.isThereAnyCloseRangeCreeps())
            this.healCloseRangeCreep();
        else
            this.healLongRangeCreep();
    } 

    this.healCloseRangeCreep = function(){
        if(this.closeRangeCreeps)
        {
            var creepToHeal = this.mostHitCreep(this.closeRangeCreeps)
            this.creep.heal(creepToHeal);
        }
    }

    this.healLongRangeCreep = function(){
        if(this.longRangeCreeps)
        {
            var creepToHeal = this.mostHitCreep(this.longRangeCreeps)
            this.creep.rangedHeal(creepToHeal);
        }
    }

    this.findCreepsInRange = function(range){
        return this.creep.pos.findInRange(Game.MY_CREEPS,  range, {
            filter: function(aCreep) {
                return aCreep.hits < aCreep.hitsMax;
            }
        });
    }

    this.mostHitCreep = function (creepList){
        return _.first(creepList.sort(this.compareHits));
    }

    this.compareHits = function(a,b){
        return a.hits - b.hits;
    }

    this.isThereAnyCloseRangeCreeps = function(){
        
        return this.closeRangeCreeps && this.closeRangeCreeps.length > 0;
    }

    this.isThereAnyLongRangeCreeps = function(){
        return this.longRangeCreeps && this.longRangeCreeps.length > 0;
    }
 }