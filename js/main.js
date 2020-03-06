$(document).ready(function() {
  // Get the clothes modal
  var modalClothes = document.getElementById("clothesModal");
  // Get the button that opens the modal
  var clothesButton = document.getElementById("clothesBtn");

  // When the user clicks the button, open the modal
  clothesButton.onclick = function() {
    modalClothes.style.display = "block";
  }

  // Get the food modal
  var modalSchool = document.getElementById("schoolModal");
  // Get the button that opens the modal
  var schoolButton = document.getElementById("schoolBtn");
  // When the user clicks the button, open the modal
  schoolButton.onclick = function() {
    modalSchool.style.display = "block";
  }

  // Get the food modal
  var modalFood = document.getElementById("foodModal");
  // Get the button that opens the modal
  var foodButton = document.getElementById("foodBtn");

  // When the user clicks the button, open the modal
  foodButton.onclick = function() {
    modalFood.style.display = "block";
  }
    // Get the food modal
    var modalToys = document.getElementById("toysModal");
    // Get the button that opens the modal
    var toysButton = document.getElementById("toysBtn");

    // When the user clicks the button, open the modal
    toysButton.onclick = function() {
      modalToys.style.display = "block";
    }

    // Get the food modal
    var modalBlankets = document.getElementById("blanketsModal");
    // Get the button that opens the modal
    var blanketsButton = document.getElementById("blanketsBtn");

    // When the user clicks the button, open the modal
    blanketsButton.onclick = function() {
      modalBlankets.style.display = "block";

    }

    // Get the food modal
    var modalHygiene = document.getElementById("hygieneModal");
    // Get the button that opens the modal
    var hygieneButton = document.getElementById("hygieneBtn");

    // When the user clicks the button, open the modal
    hygieneButton.onclick = function() {
      modalHygiene.style.display = "block";
    }


    var modalMpesa = document.getElementById("mpesaModal");
    var mpesaButton = document.getElementById("mpesaBtn");

    mpesaButton.onclick = function() {
      modalMpesa.style.display = "block";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      //alert(event.target)
      if(event.target == modalClothes) {
            modalClothes.style.display = "none";

         }
        if (event.target == modalSchool) {
            modalSchool.style.display = "none";
        }
      if(event.target == modalFood) {
            modalFood.style.display = "none";
         }
      if(event.target == modalToys) {
            modalToys.style.display = "none";
               }
       if(event.target == modalBlankets) {
            modalBlankets.style.display = "none";
                  }
      if(event.target == modalHygiene) {
            modalHygiene.style.display = "none";
                     }
      if(event.target == modalMpesa) {
              modalMpesa.style.display = "none";
                  }
    }


  });
