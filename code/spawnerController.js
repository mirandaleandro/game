module.exports = {
     
     init:function(){
         
         this.currentSpawner = Game.spawns.Spawn1;
         
         this.initCreepsCounter();
         
         if(!this.currentSpawner.spawning)
            this.createCreep();
         else
            console.log("Current spawner is spawning");
     },
     createCreep: function(){
        this.updateCreepsCounter();
        
        this.currentSpawner.createCreep([Game.WORK, Game.WORK, Game.WORK, Game.WORK, Game.MOVE], "Miner2", {role:"miner"});
        debugger;
     },
     initCreepsCounter: function(){
        Memory.creepCounter = Memory.creepCounter || 0 ;  
     }     
 };