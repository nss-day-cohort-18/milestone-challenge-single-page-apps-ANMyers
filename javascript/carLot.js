"use strict";

var CarLot = (function (original) {



  var inventory = [];
  var carArray = [];

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
      	var objectOfCars = JSON.parse(event.target.responseText);
      	inventory = objectOfCars.cars;
      	CarLot.populatePage(inventory);
      });

      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
    },

    getInventory: function(potato) {
    	for (var i = 0; i < inventory.length; i++) {
    		var currentObject = inventory[i];
    		var putTogetherString = currentObject.year + " " + currentObject.make + " " + currentObject.model;
    		console.log(putTogetherString);
    	};
    }
  };

  return original;

})(CarLot || {});








// for (var i = 0; i < inventory.length; i++) {
//         var consoleLogMe = inventory[i].something;
//         console.log(consoleLogMe);
//       };