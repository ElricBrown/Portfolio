// Scroll to specific values
// scrollTo is the same

$("#about").click(function() {
  $('html, body').animate({
  scrollTop: $("#about_me").offset().top
  }, 2000);
});

$("#work").click(function() {
  $('html, body').animate({
  scrollTop: $("#mywork").offset().top
  }, 2000);
});

$("#contact").click(function() {
  $('html, body').animate({
  scrollTop: $("#mycontact").offset().top
  }, 2000);
});

$("#top_button").click(function() {
  $('html, body').animate({
  scrollTop: $("#top").offset().top
  }, 2000);
});

window.onscroll = function() {myFunction()};

var nav = document.getElementById("nav");
var sticky = nav.offsetTop;

function myFunction() {
  if(window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else{
    nav.classList.remove("sticky");
  }
}
