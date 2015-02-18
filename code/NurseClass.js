/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('NurseClass'); // -> 'a thing'
 */
 
 var _ = require("lodash");
 var Creep = require('CreepClass');

 var Nurse = function(creep){
    this.creep = creep;
 }

module.exports = Nurse;
Nurse.prototype = Object.create(Creep.prototype);
Nurse.prototype.constructor = Nurse;
    
Nurse.prototype.init = function(){
    this.closeRangeCreeps = this.findDamagedCreepsInRange(1);
    this.longRangeCreeps = this.findDamagedCreepsInRange(3);
    this.startHealArmyMode();
}

Nurse.prototype.startHealArmyMode = function(){
    this.creep.moveTo(Game.flags.Flag2);
    if(this.isThereAnyCloseRangeCreeps())
        this.healCloseRangeCreep();
    else
        this.healLongRangeCreep();
} 

Nurse.prototype.healCloseRangeCreep = function(){
    if(this.closeRangeCreeps)
    {
        var creepToHeal = this.mostHitCreep(this.closeRangeCreeps)
        this.creep.heal(creepToHeal);
    }
}

Nurse.prototype.healLongRangeCreep = function(){
    if(this.longRangeCreeps)
    {
        var creepToHeal = this.mostHitCreep(this.longRangeCreeps)
        this.creep.rangedHeal(creepToHeal);
    }
}

Nurse.prototype.findDamagedCreepsInRange = function(range){
    return this.creep.pos.findInRange(Game.MY_CREEPS,  range, {
        filter: function(aCreep) {
            return aCreep.hits < aCreep.hitsMax;
        }
    });
}

Nurse.prototype.mostHitCreep = function (creepList){
    return _.first(creepList.sort(this.compareHits));
}

Nurse.prototype.compareHits = function(a,b){
    return a.hits - b.hits;
}

Nurse.prototype.isThereAnyCloseRangeCreeps = function(){
    
    return this.closeRangeCreeps && this.closeRangeCreeps.length > 0;
}

Nurse.prototype.isThereAnyLongRangeCreeps = function(){
    return this.longRangeCreeps && this.longRangeCreeps.length > 0;
}