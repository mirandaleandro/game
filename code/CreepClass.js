var Creep = function(creep){
  this.creep = creep;
}

module.exports = Creep;
   
Creep.prototype.init = function(){
    Console.log("This method should be overhidden");
}

Creep.prototype.isDamaged = function(){
  return this.creep.hits < this.creep.hitsMax;
}

Creep.prototype.isFull = function(){
  return this.creep.energy == this.creep.energyCapacity; 
}