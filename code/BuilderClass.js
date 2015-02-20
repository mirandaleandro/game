var Miner = require('MinerClass'); 

var Builder = function(creep){
    this.creep = creep;
}

module.exports = Builder;
Builder.prototype = Object.create(Miner.prototype);
Builder.prototype.constructor = Builder;

Builder.prototype.init = function(){
  this.nextConstructionSite = this.getNextConstructionSite();    
  this.startMiningAndBuildMode();
}
     
Builder.prototype.startMiningAndBuildMode = function(){
    if(this.isBuilding())
    {
        this.creep.build(this.nextConstructionSite);
    } 
    else{
        if(this.isFull())
            this.buildConstructionSite();
        else
            this.harvestClosestSource(); 
    }    
  
}

Builder.prototype.isBuilding = function(){
    return this.hasEnergy() && this.creep.pos.isNearTo(this.nextConstructionSite);
}

Builder.prototype.hasEnergy = function(){
    return this.creep.energy > 0;
}

Builder.prototype.buildConstructionSite = function(){
  if(this.nextConstructionSite) {
      this.creep.moveTo(this.nextConstructionSite);
      this.creep.build(this.nextConstructionSite);
  }else{
    this.startMiningMode();
  }
}

Builder.prototype.getNextConstructionSite = function(){
  return this.creep.pos.findClosest(Game.CONSTRUCTION_SITES);  
} 