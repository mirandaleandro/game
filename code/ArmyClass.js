
 module.exports = function(name, creeps){
    
     this.name = name
     this.creeps = creeps;
     this.attackRange = Memory.army[this.name].attackRange;
     this.concentrationPoint = Game.flags[CONCENTRATION_FLAG_PREFIX + this.name];
     this.healPoint = Game.flags[HEAL_FLAG_PREFIX + this.name];

     this.init = function(){
         
     }
     
     
 }