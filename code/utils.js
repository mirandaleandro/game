module.exports = {

	init: function(){

		this.setStringFormatToPrototype();

	},
	setStringFormatToPrototype: function () {
		String.prototype.format = function (){
	    	var args = arguments;
	    	return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (curlyBrack, index) {
	        	return ((curlyBrack == "{{") ? "{" : ((curlyBrack == "}}") ? "}" : args[index]));
	    	});
		}
	};
}