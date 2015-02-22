var _ = require('lodash');
var Creep = require('CreepClass');

var SettlerCarrier = function(creep){
    this.creep = creep;
}

module.exports = SettlerCarrier;
SettlerCarrier.prototype = Object.create(Creep.prototype);
SettlerCarrier.prototype.constructor = SettlerCarrier;
     
SettlerCarrier.prototype.init = function(){
     
}

SettlerCarrier.prototype.followSettlerMode = function(settler){
    this.creep.moveTo(settler.creep);
    if(!settler.isFull())
    {
        this.creep.transferEnergy(settler.creep);
    }
}
