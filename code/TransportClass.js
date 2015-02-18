/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('Transport'); // -> 'a thing'
 */
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
  this.creep.moveTo(Game.creeps.Miner0);//TODO make this dynamic
}

