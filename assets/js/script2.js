// petfinder API calls
var pf = new petfinder.Client({ apiKey: "r2JfhNwBP0572Z5Vi3v61yt3IBVXjR7QvrxulktxLNBSqa6cnw", secret: "U0snJ0pJCd6qr7sKn0ox64ef6sOHOWcFTflBDZwq", species: "Cat" });

// Global Variables
const pets = [];
let index = 0;

const favorites = [];

function storeAnimals(response) {
  for (let i = 0; i < response.data.animals.length; i++) {
    if (response.data.animals[i].photos.length !== 0) {
      pets.push(response.data.animals[i]);
    }
  }
}

function next() {

  if (index === pets.length) {
    pf.animal.search({
      type: localStorage.getItem("species"),
      limit: 50,
    })
  
      .then(function (response) {
        console.log(response);
  
        storeAnimals(response);
  
        displayAnimals();
      })
  }

  console.log(pets[index]);
  index++;
  $(".clear").empty();
  displayAnimals();
}

function displayAnimals() {
  var proPic = $("<img>").attr("src", pets[index].photos[0].medium);
  var animalName = $("<p>").text(pets[index].name);
  $(".name").append(animalName);
  $(".card-image").append(proPic);
};

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
  var favorites = JSON.parse(localStorage.getItem("favorites"));
  console.log(favorites)
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
  localStorage.setItem("name", name);
  // localStorage.setItem("postalCode", postalCode);
  if (document.querySelector('input[name="speciesDog"]:checked')) {
    localStorage.setItem("species", "dog");
  }
  else if (document.querySelector('input[name="speciesCat"]:checked')) {
    localStorage.setItem("species", "cat");
  };

  modal.style.display = "none";

  pf.animal.search({
    type: localStorage.getItem("species"),
    limit: 50,
  })

    .then(function (response) {
      console.log(response);

      storeAnimals(response);

      displayAnimals();
    })

};


// sends you to petfinder page on a separate page, shows the next animal, and saves current pet from array to local storage 
yesButton.onclick = function () {
  var link = [pets[index].url];
  window.open(link,'_blank');
  next();
  favorites.push(pets[index]);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

// shows next pet
noButton.onclick = function () {
  console.log(pets);
  next();
  console.log(index);
};
