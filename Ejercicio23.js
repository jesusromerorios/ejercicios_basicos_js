const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },  
    { name: "The Matrix", durationInMinutes: 136 },  
    { name: "Amélie", durationInMinutes: 110 },  
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

let shortMovies = [];
let normalMovies = [];
let longMovies = [];

for (const selectedMovie of movies) {
    if (selectedMovie.durationInMinutes < 100) {
        shortMovies.push(selectedMovie);
    } else if (selectedMovie.durationInMinutes > 100 && selectedMovie.durationInMinutes < 200) {
        normalMovies.push(selectedMovie);
    } else {
        longMovies.push(selectedMovie);
    }
}

console.log("Películas Cortas:");
console.log(shortMovies);
console.log("Películas con una duración normal:");
console.log(normalMovies);
console.log("Películas Largas:");
console.log(longMovies);