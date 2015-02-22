/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('MinerClass'); // -> 'a thing'
 */

var Creep = require('CreepClass'); 
var Transport = require('TransportClass'); 

var Miner = function(creep){
    this.creep = creep;
}

module.exports = Miner;
Miner.prototype = Object.create(Creep.prototype);
Miner.prototype.constructor = Miner;

Miner.prototype.init = function(){
  this.startMiningMode();
}
     
Miner.prototype.startMiningMode = function(){
  if(this.isFull())
    this.transferEnergy();
  else
    this.harvestClosestSource();
}
     
Miner.prototype.transferEnergy = function(){
  this.creep.transferEnergy(this.getClosestEmptyTransport());
}

Miner.prototype.getClosestEmptyTransport = function(){
    return this.creep.pos.findClosest(Game.MY_CREEPS, {
        filter: function(creep){
            var transport = new Transport(creep);
            return !transport.isFull();
        }
    });
}

Miner.prototype.harvestClosestSource = function(){
    var closestActiveSource = this.creep.pos.findClosest(Game.SOURCES);
    if(closestActiveSource) {
        this.creep.moveTo(closestActiveSource);
        this.creep.harvest(closestActiveSource);
    }        
}