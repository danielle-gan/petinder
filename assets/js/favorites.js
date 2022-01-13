//load favorites from local storage
const pictures =[];
const names = [];
const url = [];

window.onload = function () {
    var favorites = JSON.parse(localStorage.getItem("favorites"));
    console.log(favorites)

    for (let i=0; i <favorites.length; i++) {
        pictures.push(favorites[i].photos[0].medium)
        names.push(favorites[i].name)
        url.push(favorites[i].url)
    }
    display();
}

function display () {
    console.log(pictures,names);
    for (let i=0; i<pictures.length; i++) {
        var pic = $("<img>").attr("src", pictures[i])
        $(".pet-pictures").append(pic);
        var name = $("<h2>").text(names[i])
        $(".pet-names").append(name);
        var link = $("<a>").attr("href", url[i]).text("Adopt!");
        $(".pet-url").append(link);
    }
}

var backButton = document.getElementById("back")

backButton.onclick = function() {
    document.location.href = "./index.html";
}