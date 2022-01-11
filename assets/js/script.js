// Initialize all div with carousel class
var carousels = bulmaCarousel.attach('.carousel', options);

// Loop on each carousel initialized
for(var i = 0; i < carousels.length; i++) {
	// Add listener to  event
	carousels[i].on('before:show', state => {
		console.log(state);
	});
}

// Access to bulmaCarousel instance of an element
var element = document.querySelector('#my-element');
if (element && element.bulmaCarousel) {
	// bulmaCarousel instance is available as element.bulmaCarousel
	element.bulmaCarousel.on('before-show', function(state) {
		console.log(state);
	});
}

var pf = new petfinder.Client({apiKey: "r2JfhNwBP0572Z5Vi3v61yt3IBVXjR7QvrxulktxLNBSqa6cnw", secret: "U0snJ0pJCd6qr7sKn0ox64ef6sOHOWcFTflBDZwq"});

pf.animal.search()
    .then(function (response) {
        // Do something with `response.data.animals`
        console.log(response.data)
    })
    .catch(function (error) {
        // Handle the error
    });

	var adoptMe = document.getElementById("adopt")

	adoptMe.onclick = function () { 
		document.location.href = ''}

		