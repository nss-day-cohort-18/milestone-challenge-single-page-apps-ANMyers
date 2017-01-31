"use strict";

var CarLot = (function (original) {

    var carInventory = [];
    var inputField = document.getElementById("descrip-input");

    inputField.addEventListener('keyup', editDescription);

    function editDescription (potato) {
      var cardSections = document.getElementsByClassName("col-sm-4");
      for (var i = 0; i < cardSections.length; i++) {
        if (cardSections[i].classList.contains("lightenedblue")) {
          cardSections[i].childNodes[9].innerHTML = inputField.value;
        }
      }
      if (event.keyCode === 13) {
        inputField.value = "";
      }
    }



    original.borderReset = function (domElement, color) {
      if (domElement.className === "row") {
        return;
      } else {
      domElement.classList.remove(color);
      }
    }

    original.changeBorder = function(domElement, color) {
      if (domElement.className === "row") {
        return;
      } else {
      domElement.classList.add(color);
      inputField.focus();
      }
    }

  return original;

})(CarLot || {});



// function edit(event) {
//   for (var l = 0; l < famousPeople.length; l++) {
//     if (cardSectionArticle[l].classList.contains("border")) {
//       bioSection[l].childNodes[1].innerHTML = document.getElementById("input").value;
//     }
//   }
//   if (event.keyCode == 13) {
//     input.value = "";
//   }
// }







