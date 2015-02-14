/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('MinerClass'); // -> 'a thing'
 */
 module.exports = function(creep){
     this.creep = creep;
     
     this.init = function(){
         this.startMiningMode();
     }
     
     this.startMiningMode = function(){
        if(this.isFull())
            this.transferEnergy();
        else
            this.harvestClosestSource();
     }
     
     this.transferEnergy = function(){
        this.creep.transferEnergy(Game.creeps['Transport0']);//TODO get it dynamically
     }
     
     this.isFull = function(){
        return this.creep.energy == this.creep.energyCapacity; 
     }
     
     this.harvestClosestSource = function(){
        var closestActiveSource = this.creep.pos.findClosest(Game.SOURCES_ACTIVE);
        if(closestActiveSource) {
            this.creep.moveTo(closestActiveSource);
            var h = this.creep.harvest(closestActiveSource);
            console.log("harvesting: " + h);
        }
     }
     
 }