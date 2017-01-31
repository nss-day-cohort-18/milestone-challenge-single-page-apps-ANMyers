"use strict";

var CarLot = (function (original) {

	var carInventory = [];

	// setTimeout(function(){ 
	// 	CarLot.loadInventory();
	// }, 15);
    
	original.populatePage = function (inventory) {

		carInventory = inventory;

	 	var mainDiv = document.getElementById("container");
	 	var createdDiv = document.createElement("DIV");
	 	createdDiv.classList.add("row");
	 	var n = 1;
	 		for (var i = 0; i < inventory.length; i++) {

	 			var putToDiv = `<div class="col-sm-4 bordered" id="${inventory[i].year}-${inventory[i].model}">
		   							<h3>${inventory[i].make} ${inventory[i].model}</h3>
						    		<img src="../${inventory[i].image}" alt="${inventory[i].year} ${inventory[i].make} ${inventory[i].model}">
							    	<p>${inventory[i].year}</p>
						    		<p>$${inventory[i].price}</p>
							    	<p>${inventory[i].description}</p>
						    	</div>`;

				createdDiv.innerHTML += putToDiv;
				mainDiv.appendChild(createdDiv);
				if (i === ((n * 3) - 1)) {
					createdDiv = document.createElement("DIV");
					createdDiv.classList.add("row");
					n++;
				}
	 		}
		CarLot.activateEvents();
	}

	original.activateEvents = function (dontjudgeme) {
		var carCards = document.getElementsByClassName("col-sm-4");
		var inputText = document.getElementById("descrip-input");
		for (var i = 0; i < carCards.length; i++) {
			carCards[i].addEventListener('click', (e) => {
				
				if (event.currentTarget.classList.contains("lightenedblue") === false) {
					for (var n = 0; n < carCards.length; n++){
						carCards[n].classList.remove("lightenedblue");
					}
					CarLot.changeBorder(event.currentTarget, "lightenedblue");
				} else {
					CarLot.borderReset(event.currentTarget, "lightenedblue");
				}
			});
		}
	}
	
	CarLot.loadInventory();

  return original;

})(CarLot || {});





