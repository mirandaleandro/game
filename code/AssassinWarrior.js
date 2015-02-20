var Warrior = require('WarriorClass');

var AssassinWarrior = function(creep){
  this.creep = creep;
}

module.exports = AssassinWarrior;

AssassinWarrior.prototype = Object.create(Warrior.prototype);
AssassinWarrior.prototype.constructor = AssassinWarrior;

AssassinWarrior.prototype.getTargetToAttack = function(){
    return this.getClosestEnemyHealer() || this.getClosestEnemy();
}

AssassinWarrior.prototype.getClosestEnemyHealer = function(){
    return this.creep.pos.findClosest(Game.HOSTILE_CREEPS, {
        filter: function(creep){
            return creep.getActiveBodyparts(Game.HEAL) > 0;
        }
    });
}



 

 