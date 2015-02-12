module.exports = {
	format: function (targetString) {
    	var args = arguments;
    	return targetString.replace(/\{\{|\}\}|\{(\d+)\}/g, function (curlyBrack, index) {
        	return ((curlyBrack == "{{") ? "{" : ((curlyBrack == "}}") ? "}" : args[index+1]));
    	});
	}
}