


// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the submit button that stores form information to local storage
var submitBtn = document.getElementById("submitBtn");

// When the user opens the page, show the modal and get items from local storage
window.onload = function () {
  modal.style.display = "block";
  var name = localStorage.getItem('name');
  var postalCode = localStorage.getItem('postalCode')
  var species = localStorage.getItem('species');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//When the user clicks the submit button, store information in fields to local storage
submitBtn.onclick = function () {
  var name = $('#name').val();
  var postalCode = $('#postalCode').val();
  var speciesDog = $('#speciesDog').val();
  localStorage.setItem("name", name);
  localStorage.setItem("postalCode", postalCode);
  if (speciesDog = 'on') {
    localStorage.setItem("species", "dog");
  }
  else {
    localStorage.setItem("species", "cat");
  };
};