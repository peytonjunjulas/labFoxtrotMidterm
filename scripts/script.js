$(document).ready(function(){
  
//Movies Data 
const peytonMovies = [
  "Wolf of Wall Street",
  "Star Wars Episode 5 Empire Strikes Back",
  "The Departed",
  "Batman The Dark Knight",
  "Django Unchained"
];

let mLen = peytonMovies.length;
let text = "<ul>";
for (let i = 0; i < mLen; i++) {
  text += "<li>" + peytonMovies[i] + "</li>";
}
text += "</ul>";

document.getElementById("movies").innerHTML = text;

//Game Data
const peytonGames = [
    "Batman Arkham City",
    "Super Smash Bros Ultimate",
    "Pokemon: Diamond",
    "Red Dead Redemption 2"
  ];
  
  let gLen = peytonGames.length;
  let text1 = "<ul>";
  for (let i = 0; i < gLen; i++) {
    text1 += "<li>" + peytonGames[i] + "</li>";
  }
  text1 += "</ul>";
  
  document.getElementById("games").innerHTML = text1;

  //Show Data
  const peytonShows = [
      "Breaking Bad",
      "Dexter",
      "Naruto: Shippuden",
      "The Mandalorian"
  ];
  
  let sLen = peytonShows.length;
  let text2 = "<ul>";
  for (let i = 0; i < sLen; i++) {
    text2 += "<li>" + peytonShows[i] + "</li>";
  }
  text2 += "</ul>";
  
  document.getElementById("shows").innerHTML = text2;

});
