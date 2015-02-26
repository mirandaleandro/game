/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('SettlerClass'); // -> 'a thing'
 */
var Builder = require('BuilderClass');
var SettlerCarrier = require('SettlerCarrierClass');

var Settler = function(creep){
    this.creep = creep;
}

module.exports = Settler;
Settler.prototype = Object.create(Builder.prototype);
Settler.prototype.constructor = Settler;

Settler.prototype.init = function(){
  this.updateSettlerCarrier();
  this.nextConstructionSite = this.getNextConstructionSite();
  
  if(!this.hasVisitedSpawn())
    this.moveToSpawn();  
  else     
    this.buildSpawnMode();
}

Settler.prototype.updateSettlerCarrier = function(){
    if(Game.creeps.SettlerCarrier0)
        this.carrier = new SettlerCarrier(Game.creeps.SettlerCarrier0);
}

Settler.prototype.buildSpawnMode = function(){
    if(this.carrier)
        this.buildSpawnWithCarrier();    
    else    
        this.startMiningAndBuildMode();
}

Settler.prototype.buildSpawnWithCarrier = function(){
  if(this.isBuilding())
      this.creep.build(this.nextConstructionSite);
  else
      this.checkForKeepMining();      

  this.carrier.followSettlerMode(this); 
}

Settler.prototype.checkForKeepMining = function(){

  if(this.carrier.isFull() && this.isFull())
  {
    this.buildConstructionSite();
  }
  else
  {
    this.transferEnergy();
    this.harvestClosestSource(); 
  }

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