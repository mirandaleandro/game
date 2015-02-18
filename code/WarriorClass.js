/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('WarriorClass'); // -> 'a thing'
 */
var Creep = require('lodash');

var Warrior = function(creep){
  this.creep = creep;
}

module.exports = Warrior;
Warrior.prototype = Object.create(Creep.prototype);
Warrior.prototype.constructor = Warrior;
   
Warrior.prototype.init = function(){
  this.startAttackWhenHealthyMode();
}

Warrior.prototype.startAttackWhenHealthyMode = function(){
  var target = this.creep.pos.findClosest(Game.HOSTILE_CREEPS);
  if(this.isTargetToBeAttacked(target) && this.hasAttackParts()) {
    this.creep.moveTo(target);  
    this.creep.attack(target);
  }
  else{
    if(this.isDamaged())
    {
      this.creep.moveTo(Game.flags.Flag2);
      this.creep.attack(target);
    }
    else{
      this.creep.moveTo(Game.flags.Flag1);    
    }
  }
}
 
Warrior.prototype.hasAttackParts = function(){
  return this.creep.getActiveBodyparts(Game.ATTACK) > 0;
} 
 
Warrior.prototype.isTargetToBeAttacked = function(target){
  return this.isTargetInAttackRange(target) || this.isTargetChaseable(target);
}
 
Warrior.prototype.isTargetInAttackRange = function(target){
  if(target)
  {
    var attackRangeFlagPosition = Game.flags.AttackRange.pos;  
    return target && target.pos.x < attackRangeFlagPosition.x && target.pos.y > attackRangeFlagPosition.y;
  }
  return false;
}
 
Warrior.prototype.isTargetChaseable = function(target){
  return target && this.creep.pos.inRangeTo(target, 3);
} 
 