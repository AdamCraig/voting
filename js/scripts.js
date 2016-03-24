$(document).ready(function () {
  var age = parseInt(prompt("How old are you (in years)?"));

  if (age >= 18) {
    $('#candidates').show();
  }
  else {
    $('#under-18').show();
  }
});
