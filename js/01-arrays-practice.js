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

window.console.log("Last element is: " + movies.concat(leastFavMovies).reverse().slice(-1)[0]); 
*/    

//STEP 11
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

window.console.log("First movie is: " + movies.concat(leastFavMovies).reverse()[0]);
*/
//STEP 12
/*
var movies = [];
movies[0] = "Cindarella";
movies[1] = "The Godfather";
movies[2] = "Angelica";
movies[3] = "Dirty Dancing";
movies[4] = "Catwoman";
movies[5] = "Son of the Mask";
movies[6] = "Alone in the dark";

//Remove movie "Son of the Mask", replace with movie "Pirates of Caribbean"

movies[movies.indexOf("Son of the Mask")] = "Pirates of Caribbean";

window.console.log(movies);

*/
//STEP 13
/*
var employee1 = [];
employee1["id"] = 100;
employee1["name"] = "Sofia Faverman";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 111;
employee2["name"] = "Goldie Malamud";
employee2["title"] = "Data Scientist";
employee2["department"] = "Engineering";
employee2["isCurrent"] = true;

var employees = [employee1, employee2];

window.console.log("Second employee\'s name is: " + employees[1]["name"]);
*/
//STEP 14
/*
var employee1 = [];
employee1["id"] = 100;
employee1["name"] = "Sofia Faverman";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 111;
employee2["name"] = "Goldie Malamud";
employee2["title"] = "Data Scientist";
employee2["department"] = "Engineering";
employee2["isCurrent"] = true;

var employees = [employee1, employee2];

var index;
for (index in employees) { 
   window.console.log(employees[index]["name"]);
}
*/
//STEP 15
/*
var employee1 = [];
employee1["id"] = 100;
employee1["name"] = "Sofia Faverman";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 111;
employee2["name"] = "Goldie Malamud";
employee2["title"] = "Data Scientist";
employee2["department"] = "Engineering";
employee2["isCurrent"] = true;

var employee3 = [];
employee3["id"] = 113;
employee3["name"] = "Arkady Shumsky";
employee3["title"] = "CICS Systems Programmer";
employee3["department"] = "Engineering";
employee3["isCurrent"] = false;
var employees = [employee1, employee2, employee3];

var index;
for (index in employees) { 
     //window.console.log(employees[index]["isCurrent"]);
   if (employees[index]["isCurrent"] !== false) {    
     window.console.log(employees[index]["name"]);
   }
}
*/

//STEP 16
/*
var i;
var movies = [ ["Cindarella", 2],
               ["The Godfather", 3],
               ["Angelica", 1],
               ["Dirty Dancing", 5],
               ["Pretty Woman", 4]
             ];
for (i = 0; i < movies.length; i++) {
    var names = movies[i].filter(function(movie) {
        "use strict"; 
        return typeof movie === "string";
    });
window.console.log(names);
}
*/
//STEP 17
/*
var employees = ["Zak","Jessica","Mark","Fred","Sally"];
function showEmployee (employees) {
    "use strict";
    window.console.log(employees);
    window.console.log("Emloyees:\n\n");
    var index;
    for (index in employees) {
        window.console.log(employees[index]);
    }

}
showEmployee(employees);
*/    

//STEP 18
/*
var array1 = [58, '', 'abcd', true, null, false, 0];

var newList = array1.filter(function(item) {
      return (item !== false && item !== 0 && item !== null);                           
});
window.console.log(newList); 
*/
//STEP 19

//STEP 20