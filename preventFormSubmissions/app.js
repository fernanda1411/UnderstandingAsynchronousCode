/*
  For the line with `preventDefault`,
  try clicking the 'Submit' button without it first.
  Then, comment that code in and see how it changes.
*/

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('myForm');
  form.addEventListener('submit', function (e) {
  	e.preventDefault();

  	var name = document.getElementById('name');
    var text = name.value;

  	name.value = '';
    name.focus();

    var prev = document.querySelector('.alert');
    if (prev) {
    	prev.remove();
    }

    var alert = document.createElement('div');
    alert.className = 'alert alert-info';
    alert.textContent = 'Thank you for your submission, ' + text + '!';

    var row = document.querySelector('form');
    row.append(alert);
  });
})
