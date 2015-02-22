var gameController = require('gameController');
var Warrior = require('WarriorClass');

var Legion = function(creep){
  this.creep = creep;
}

module.exports = Legion;
Legion.prototype = Object.create(Warrior.prototype);
Legion.prototype.constructor = Warrior;
   
Legion.prototype.init = function(){
    
  this.closestEnemy = this.getTargetToAttack();  
  this.legionPositions = this.getStandPositions();
  this.defendPositionMode();
}

Legion.prototype.defendPositionMode = function(){
  if(!this.isAtLegionPosition())
    this.moveToClosestStandPosition();  
  this.attackWhenNear();  
}

Legion.prototype.attackWhenNear = function(){
    
    //if( this.isClosestEnemyNear() ){//chek necessity of this check. if attck undefined or a enemy that is not near does no thrown exception
        this.creep.attack(this.closestEnemy);
    //}
}

Legion.prototype.moveToClosestStandPosition = function(){
    var closestStandPosition = this.getClosestStandPosition();
    this.creep.moveTo(closestStandPosition);
}

Legion.prototype.isAtLegionPosition = function(){
    var position = _.findWhere(this.legionPositions, { 'x': this.creep.pos.x, 'y': this.creep.pos.y })
    return position !== undefined;
}

Legion.prototype.getStandPositions = function(){
    return _.map(Memory.legionPositions, function(memoryPos){
        return gameController.room.getPositionAt(memoryPos.x, memoryPos.y); 
    });
}

Legion.prototype.getClosestStandPosition = function(){
    return this.creep.pos.findClosest(this.legionPositions);    
}

Legion.prototype.isClosestEnemyNear = function(){
    return this.closestEnemy && this.creep.pos.isNearTo(this.closestEnemy);
}