// petfinder API calls
var pf = new petfinder.Client({ apiKey: "r2JfhNwBP0572Z5Vi3v61yt3IBVXjR7QvrxulktxLNBSqa6cnw", secret: "U0snJ0pJCd6qr7sKn0ox64ef6sOHOWcFTflBDZwq", species: "Cat" });
var yesButton = document.getElementById("yes-but")
var noButton = document.getElementById("no-but")


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
  // var postalCode = $('#postalCode').val();
  var speciesDog = $('#speciesDog').val();
  var speciesCat = $('#speciesCat').val();
  localStorage.setItem("name", name);
  // localStorage.setItem("postalCode", postalCode);
  if (speciesDog = 'on') {
    localStorage.setItem("species", "dog");
  }
  if (speciesCat= 'on') {
    localStorage.setItem("species", "cat");
  };

  modal.style.display = "none";

  pf.animal.search({
    type: localStorage.getItem("species"),
    limit: 10,
  })
    .then(function (response) {
      console.log(response);

      var loop = true;
      var i = 0; 
      while (loop) {
        if (response.data.animals[i].photos[0].full) {
          var proPic = $("<img>").attr("src", response.data.animals[i].photos[0].full);
          var animalName = $("<p>").text(response.data.animals[i].name);
          console.log(response.data.animals[i].photos[0].full);
          $(".name").append(animalName);
          $(".card-image").append(proPic);
          loop = false;
        }
        else {
          i++
        }
      }
    })
    .catch(function (error) {
      // Handle the error
    });

}
};

yesButton.onclick = function () {
  document.location.href = 'http://127.0.0.1:5500/index2.html'};
   
noButton.onclick = function () { 
  document.location.href = 'http://127.0.0.1:5500/index2.html'};
