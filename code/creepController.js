 var utils = require('utils');
 
 module.exports = {
     
     init: function(){
         this.moveCreeps();
     },
     moveCreeps:function(){
         
     },
     getCreepTemplateWithRole: function(role){
     	var creepMemoryTemplate = Memory.creep.filter( function(creepTemplate){ return creepTemplate.role == role; } )[0];
        var creepNameFromTemplate = creepMemoryTemplate.nameTemplate.concat(creepMemoryTemplate.count);
     	return {
     		body: creepMemoryTemplate.body,
     		name: creepNameFromTemplate,
     		metadata: {
     			role: creepMemoryTemplate.role
     		}
     	};
     }


     
     
 }