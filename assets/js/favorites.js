//load favorites from local storage
const pictures =[];
const names = [];

window.onload = function () {
    var favorites = JSON.parse(localStorage.getItem("favorites"));
    console.log(favorites)

    for (let i=0; i <favorites.length; i++) {
        pictures.push(favorites[i].photos[0].medium)
        names.push(favorites[i].name)
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
    }
}