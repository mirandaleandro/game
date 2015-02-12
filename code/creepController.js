 var utils = require('utils');
 
 module.exports = {
     
     init: function(){
         this.moveCreeps();
     },
     moveCreeps:function(){
         
     },
     getCreepTemplateWithRole: function(role){
     	var creepMemoryTemplate = Memory.creep.filter( function(creepTemplate){ return creepTemplate.role == role; } );
     	return {
     		body: creepMemoryTemplate.body,
     		name: utils.format(creepMemoryTemplate.nameTemplate, creepMemoryTemplate.count),
     		metadata: {
     			role: creepMemoryTemplate.role
     		}
     	};
     }


     
     
 }