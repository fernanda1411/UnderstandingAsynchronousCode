var onButtonClick = function() {
  var name = document.getElementById('name').value;
  var lang = document.getElementById('lang').value;
  var greeting;

  if (lang === 'es') {
    greeting = `Hola, ${name}`;
  } else if (lang === 'pt') {
    greeting = `Ola, ${name}`;
  } else {
    greeting = `Hello, ${name}`;
  }

  document.getElementById('message').textContent += greeting;
}

button.addEventListener('click', onButtonClick);