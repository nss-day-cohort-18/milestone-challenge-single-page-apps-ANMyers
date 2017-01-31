"use strict";

var CarLot = (function (original) {

	var carInventory = []
	var l = 0;

	setTimeout(function(){ 
		CarLot.loadInventory();
	}, 15);

    


	original.populatePage = function (inventory) {

		carInventory = inventory;

	  	// Loop over the inventory and populate the page
	 	var mainDiv = document.getElementById("container");

			for (var i = 0; i < inventory.length; i = i + 3) {

				var putToDiv = 
	  					`<div class="row">
	  						<div class="col-sm-4 bordered" id="${inventory[i].year}-${inventory[i].model}">
	  							<h3>${inventory[i].make} ${inventory[i].model}</h3>
						    	<img src="../${inventory[i].image}" alt="${inventory[i].year} ${inventory[i].make} ${inventory[i].model}">
						    	<p>${inventory[i].year}</p>
						    	<p>$${inventory[i].price}</p>
						    	<p>${inventory[i].description}</p>
						    </div>
						    <div class="col-sm-4 bordered" id="${inventory[i + 1].year}-${inventory[i + 1].model}">
	  							<h3>${inventory[i + 1].make} ${inventory[i + 1].model}</h3>
						    	<img src="../${inventory[i + 1].image}" alt="${inventory[i + 1].year} ${inventory[i + 1].make} ${inventory[i + 1].model}">
						    	<p>${inventory[i + 1].year}</p>
						    	<p>$${inventory[i + 1].price}</p>
						    	<p>${inventory[i + 1].description}</p>
						    </div>
						    <div class="col-sm-4 bordered" id="${inventory[i + 2].year}-${inventory[i + 2].model}">
	  							<h3>${inventory[i + 2].make} ${inventory[i + 2].model}</h3>
						    	<img src="../${inventory[i + 2].image}" alt="${inventory[i + 2].year} ${inventory[i + 2].make} ${inventory[i + 2].model}">
						    	<p>${inventory[i + 2].year}</p>
						    	<p>$${inventory[i + 2].price}</p>
						    	<p>${inventory[i + 2].description}</p>
						    </div>
						</div>`

				mainDiv.innerHTML += putToDiv
			}

		CarLot.activateEvents();

	}

	original.activateEvents = function (dontjudgeme) {
		var carCards = document.getElementsByClassName("col-sm-4");
		var inputText = document.getElementById("descrip-input");
		for (var i = 0; i < carCards.length; i++) {
			carCards[i].addEventListener('click', (e) => {
				if (l === 0) {
					CarLot.changeBorder(event.target.parentElement, "lightenedblue");
					l = 1;
				} else {
					CarLot.borderReset(event.target.parentElement, "lightenedblue");
					l = 0;
				}
			});
		}

	}
	


  return original;

})(CarLot || {});



















