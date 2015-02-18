var AssassinWarrior = function(creep){
  this.creep = creep;
}

module.exports = AssassinWarrior;

AssassinWarrior.prototype = Object.create(Warrior.prototype);
AssassinWarrior.prototype.constructor = AssassinWarrior;
   
AssassinWarrior.prototype.init = function(){
  
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
 

 