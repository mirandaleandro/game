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
     		name: creepMemoryTemplate.nameTemplate.format(creepMemoryTemplate.count),
     		metadata: {
     			role: creepMemoryTemplate.role
     		}
     	};
     }


     
     
 }