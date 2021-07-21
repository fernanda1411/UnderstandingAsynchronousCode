// var img = document.querySelector('img');
// debugger;
// var imgLog = function() {
//   console.log("You moused over Mega Man!");
// }

// img.addEventListener('mouseover', imgLog);


// var imgLog = function() {
//   console.log("You moused over Mega Man!");
// }

// document.addEventListener("DOMContentLoaded", function() {
//   var img = document.querySelector('img');
//   img.addEventListener('mouseover', imgLog);
// });

var body = document.querySelector('body');
var button = document.querySelector('button');

body.addEventListener('click', function() {
  alert("YOU CLICKED ON THE BODY!!!!");
}, true);

button.addEventListener('click', function() {
  alert("YOU'RE REALLY PUSHING MY BUTTONS!!!!!");
});