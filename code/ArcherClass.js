var Creep = require('CreepClass');
var Warrior = require('WarriorClass');

var Archer = function(creep){
  this.creep = creep;
}

module.exports = Archer;
Archer.prototype = Object.create(Warrior.prototype);
Archer.prototype.constructor = Archer;
   
Archer.prototype.init = function(){
  this.startRangeAttackWhenHealthyMode();
}

Archer.prototype.startRangeAttackWhenHealthyMode = function(){
    
  var target = this.getTargetToAttack();

  if(this.isTargetToBeAttacked(target) && this.hasRangedAttackParts()) {
    //debugger;
    this.creep.moveTo(target);  
    this.creep.rangedAttack(target);
  }
  else
  {
      this.creep.moveTo(Game.flags.Flag1);       
  }
}

Archer.prototype.hasRangedAttackParts = function(){
  return this.creep.getActiveBodyparts(Game.RANGED_ATTACK) > 0;
}  
 