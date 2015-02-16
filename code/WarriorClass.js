/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('WarriorClass'); // -> 'a thing'
 */
  module.exports = function(creep){
     this.creep = creep;
     
     this.init = function(){
        this.startDummyAttackMode();
     }
     
     this.startDummyAttackMode = function(){
       var target = this.creep.pos.findClosest(Game.HOSTILE_CREEPS);
       if(this.isDamaged())
       {
           this.creep.moveTo(Game.flags.Flag2);
           this.creep.attack(target);
       }
       else{
           if(this.isTargetToBeAttacked(target)) {
                this.creep.moveTo(target);
                this.creep.attack(target);
            }
            else{
                this.creep.moveTo(Game.flags.Flag1);
            }
       }
         
     }
     
     this.isDamaged = function(){
        return this.creep.hits < this.creep.hitsMax;
     }
     
     this.isTargetToBeAttacked = function(target){
         return this.isTargetInAttackRange(target) || this.isTargetChaseable(target);
     }
     
     this.isTargetInAttackRange = function(target){
         if(target)
         {
            var attackRangeFlagPosition = Game.flags.AttackRange.pos;  
            return target && target.pos.x < attackRangeFlagPosition.x && target.pos.y > attackRangeFlagPosition.y;
         }
         return false;
     }
     
     this.isTargetChaseable = function(target){
        return target && this.creep.pos.inRangeTo(target, 3);
     } 
 }