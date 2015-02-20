/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('SettlerClass'); // -> 'a thing'
 */
var Builder = require('BuilderClass'); 

var Settler = function(creep){
    this.creep = creep;
}

module.exports = Settler;
Settler.prototype = Object.create(Builder.prototype);
Settler.prototype.constructor = Settler;

Settler.prototype.init = function(){
  this.nextConstructionSite = this.getNextConstructionSite();
  if(!this.hasVisitedSpawn())
    this.moveToSpawn();  
  else     
    this.startMiningAndBuildMode();
}

Settler.prototype.moveToSpawn = function(){
    if(this.isAtRangeOfSpawn())
        this.creep.memory.hasVisitedSpawn = true;
    this.creep.moveTo(this.nextConstructionSite);
}

Settler.prototype.hasVisitedSpawn = function(){
    return this.creep.memory.hasVisitedSpawn;
}

Settler.prototype.isAtRangeOfSpawn = function(){
    if(this.nextConstructionSite)
        return this.creep.pos.inRangeTo(this.nextConstructionSite,3); 
    return false;        
}

Settler.prototype.getNextConstructionSite = function(){
  return this.creep.pos.findClosest(Game.CONSTRUCTION_SITES,{
      filter: function(constructionSite){
          return constructionSite.structureType == Game.STRUCTURE_SPAWN;
      }
  });  
} 