//define functions here

function getIt () {
  alert("Hey!");
}

function frameIt () {
  $(this).addclass(tasty);
  $(this).css('border', '3m solid red');
}

function pressIt (n) {
  if(n.which == 71) {
    alert ("You have pressed the G key");
  }
}

function submitIt() {
  alert("Your form is going to be submitted now");
  return;
}

$(document).ready(function(){

$('p').click(getIt ())

$('img').load(frameIt())

$('form').keydown(pressIt(n))

$('form').submit(submitIt())

});
