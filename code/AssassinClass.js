var Warrior = require('WarriorClass');

var Assassin = function(creep){
  this.creep = creep;
}

module.exports = Assassin;

Assassin.prototype = Object.create(Warrior.prototype);
Assassin.prototype.constructor = Assassin;

Assassin.prototype.getTargetToAttack = function(){
    return this.getClosestEnemyHealer() || this.getClosestEnemy();
}

Assassin.prototype.getClosestEnemyHealer = function(){
    return this.creep.pos.findClosest(Game.HOSTILE_CREEPS, {
        filter: function(creep){
            return creep.getActiveBodyparts(Game.HEAL) > 0;
        }
    });
}