/*eslint-env browser */
//STEP 1
/*
var movies = [ "Cindarella",
               "The Godfather",
               "Angelica",
               "Dirty Dancing",
               "Pretty Woman"
             ];
window.console.log("Second favorite movie is " + movies[1]);
*/

//STEP 2
/*
var movies = new Array(5);
movies[0] = "Cindarella";
movies[1] = "The Godfather";
movies[2] = "Angelica";
movies[3] = "Dirty Dancing";
movies[4] = "Pretty Woman";
           
window.console.log("First favorite movie is " + movies[0]);
*/

//STEP 3
/*
var movies = new Array(5);
movies[0] = "Cindarella";
movies[1] = "The Godfather";
movies[2] = "Angelica";
movies[3] = "Dirty Dancing";
movies[4] = "Pretty Woman";
movies[5] = "Romeo and Juliette";
           
window.console.log("Array length is " + movies.length);
*/

//STEP 4
/*
var movies = [];
movies[0] = "Cindarella";
movies[1] = "The Godfather";
movies[2] = "Angelica";
movies[3] = "Dirty Dancing";
movies[4] = "Pretty Woman";
movies[5] = "Romeo and Juliette";
movies[6] = "Pirates of Caribbean"; 
delete movies[0];
           
window.console.log(movies);
*/

//STEP 5
/*
var movies = [];
movies[0] = "Cindarella";
movies[1] = "The Godfather";
movies[2] = "Angelica";
movies[3] = "Dirty Dancing";
movies[4] = "Pretty Woman";
movies[5] = "Romeo and Juliette";
movies[6] = "Pirates of Caribbean";

for (var i=0; i < movies.length; i++) {
    window.console.log(movies[i]);
}
*/
//STEP 6
/*
var movies = [];
movies[0] = "Cindarella";
movies[1] = "The Godfather";
movies[2] = "Angelica";
movies[3] = "Dirty Dancing";
movies[4] = "Pretty Woman";
movies[5] = "Romeo and Juliette";
movies[6] = "Pirates of Caribbean";

//for-in loop
var index;
for (index in movies) { 
   window.console.log(movies[index]);
}
*/

//STEP 7
/*
var movies = [];
movies[0] = "Cindarella";
movies[1] = "The Godfather";
movies[2] = "Angelica";
movies[3] = "Dirty Dancing";
movies[4] = "Pretty Woman";
movies[5] = "Romeo and Juliette";
movies[6] = "Pirates of Caribbean";

//for-in loop
var index;
for (index in movies.sort()) { 
   window.console.log(movies.sort()[index]);
}
*/

//STEP 8
/*
var movies = [];
movies[0] = "Cindarella";
movies[1] = "The Godfather";
movies[2] = "Angelica";
movies[3] = "Dirty Dancing";
movies[4] = "Pretty Woman";
movies[5] = "Romeo and Juliette";
movies[6] = "Pirates of Caribbean";

var leastFavMovies = [];
leastFavMovies[0] = "Catwoman";
leastFavMovies[1] = "Son of the Mask";
leastFavMovies[2] = "Alone in the dark";

var index;
window.console.log("Movies I like:\n\n");
//for-in loop

for (index in movies.sort()) { 
   window.console.log(movies.sort()[index]);
}
window.console.log("\nMovies I regret watching:\n\n");
//for-in loop

for (index in movies.sort()) { 
   window.console.log(leastFavMovies.sort()[index]);
}
*/
//STEP 9
/*
var movies = [];
movies[0] = "Cindarella";
movies[1] = "The Godfather";
movies[2] = "Angelica";
movies[3] = "Dirty Dancing";
movies[4] = "Pretty Woman";
movies[5] = "Romeo and Juliette";
movies[6] = "Pirates of Caribbean";

var leastFavMovies = [];
leastFavMovies[0] = "Catwoman";
leastFavMovies[1] = "Son of the Mask";
leastFavMovies[2] = "Alone in the dark";

window.console.log(movies.concat(leastFavMovies).reverse());
*/
//STEP 10

var movies = [];
movies[0] = "Cindarella";
movies[1] = "The Godfather";
movies[2] = "Angelica";
movies[3] = "Dirty Dancing";
movies[4] = "Pretty Woman";
movies[5] = "Romeo and Juliette";
movies[6] = "Pirates of Caribbean";

var leastFavMovies = [];
leastFavMovies[0] = "Catwoman";
leastFavMovies[1] = "Son of the Mask";
leastFavMovies[2] = "Alone in the dark";

window.console.log(movies.concat(leastFavMovies).reverse());

window.console.log("Last element is: " + movies.concat(leastFavMovies).reverse().slice(-1)[0]);

//STEP 11

//STEP 12

//STEP 13

//STEP 14

//STEP 15

//STEP 16

//STEP 17

//STEP 18

//STEP 19

//STEP 20