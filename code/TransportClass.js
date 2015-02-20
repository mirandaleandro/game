/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('Transport'); // -> 'a thing'
 */
var _ = require('lodash');
var Creep = require('CreepClass');


var Transport = function(creep){
    this.creep = creep;
}

module.exports = Transport;
Transport.prototype = Object.create(Creep.prototype);
Transport.prototype.constructor = Transport;
     
Transport.prototype.init = function(){
  this.startEnergyCollectionMode(); 
}

Transport.prototype.startEnergyCollectionMode = function(){
  var closestDroppedEnergy = this.creep.pos.findClosest(Game.DROPPED_ENERGY);
  this.moveCloseToMiner();
  this.unloadAtBaseIfFull();
}

Transport.prototype.goLoadTransport = function(target){
  this.creep.moveTo(target);
  this.creep.pickup(target);
}

Transport.prototype.unloadAtBaseIfFull = function(){
  if(this.isFull()) {
    this.creep.moveTo(Game.spawns.Spawn1);
    this.creep.transferEnergy(Game.spawns.Spawn1);
  }
}

Transport.prototype.moveCloseToMiner = function(){
  this.creep.moveTo(this.getMostFullMiner());
}

Transport.prototype.getMostFullMiner = function(){
  return _.max(this.getAllMiners(), function(c){ return c.energy; })
}

Transport.prototype.getAllMiners = function(){
  return _.filter(Game.creeps, function(c) {
      return c.memory.role == "miner";
      });
}

