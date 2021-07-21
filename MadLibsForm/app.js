var libButton = document.getElementById('lib-button');
var libIt = function() {
  var storyDiv = document.getElementById("story");
  var noun = document.getElementById('noun').value;
  var adjective = document.getElementById('adjective').value;
  var person = document.getElementById('person').value;
  storyDiv.innerHTML = `${noun} ${adjective} ${person}`;
};

libButton.addEventListener('click', libIt);

