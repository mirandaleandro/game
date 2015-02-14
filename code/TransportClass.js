/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('TransportClass'); // -> 'a thing'
 */
  module.exports = function(creep){
     this.creep = creep;
     
     this.init = function(){
        this.startEnergyCollectionMode(); 
     }
     
     this.startEnergyCollectionMode = function(){
        var closestDroppedEnergy = this.creep.pos.findClosest(Game.DROPPED_ENERGY);
     
        if(closestDroppedEnergy) 
            this.goLoadTransport(closestDroppedEnergy);
        else
            this.moveCloseToMiner();
        this.unloadAtBaseIfFull();
     }
     
     this.goLoadTransport = function(target){
        this.creep.moveTo(target);
        this.creep.pickup(target);
     }
     
     this.unloadAtBaseIfFull = function(){
        if(this.isFull()) {
            this.creep.moveTo(Game.spawns.Spawn1);
            this.creep.transferEnergy(Game.spawns.Spawn1);
        }
     }
     
     this.isFull = function(){
        return this.creep.energy == this.creep.energyCapacity; 
     }
     
     this.moveCloseToMiner = function(){
        this.creep.moveTo(Game.creeps.Miner0);//TODO hardcode value must be replaced
        //TODO move to the closest as possible to a miner if I can't find energy
        //I'm assuming that the miner is mining
     }
     
 }