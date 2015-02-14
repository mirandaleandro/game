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
       
       if(target && target.pos.x < 10 && target.pos.y > 25) {
            this.creep.moveTo(target);
            this.creep.attack(target);
        }
        else{
            this.creep.moveTo(Game.flags.Flag1);
        }
         
     }
     
     
     
 }