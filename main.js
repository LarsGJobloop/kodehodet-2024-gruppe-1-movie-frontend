// // Spør serveren etter alle filmen
// const baseUrl = "http://localhost:5172";
// const response = await fetch(baseUrl + "/movies");

// // Konverter fra Felles Språk til JS
// const movies = await response.json();

// // For hver film
// for (const movie of movies) {
//   // Lage et HTML Element
//   const movieElement = createMovieCard(movie);

//   // Hekte Elementet på nettsiden
//   // Få tak i elementet vi ønsker sette det inn under
//   const movieList = document.querySelector("#movie-list");

//   movieList.append(movieElement);
// }

// function createMovieCard(movie) {
//   const movieElement = document.createElement("li");
//   movieElement.textContent = movie.title;
//   movieElement.className = "movie-card";

//   return movieElement;
// }

function sayHello() {
  console.log("Hello!");
}

const myButton = document.querySelector("#my-button");
myButton.addEventListener("click", sayHello);
