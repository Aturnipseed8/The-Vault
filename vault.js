//Sets 'secret' values defined by a 'key' word.
//Create a module that exposes 2 functions.


'use strict';
module.exports = function() {
 	var _key = '';
 	var _value; 
 
//  1) Vault should return null if no key is used:
	function getValue(key) {
		if(_key === key) {
			return _value;
		} else {
			return null;
		}
	}
 // }
 	function setValue(key, value) {
 		_key = key;
 		_value = value;

 }
return {
	setValue : setValue,
	getValue : getValue
};


};