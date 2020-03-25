var i = 0;
var txt = "Hello, I'm Pawan";
var speed = 250;

function typeWriter() {
  setTimeout(typeWriter, 10000);
  if (i < txt.length) {
    document.getElementById("myName").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

$(document).ready(function(){

  $('.navbar-nav .nav-link').click(function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
  })

  $('#education-section').hide();
  $('#experience-section').hide();
  $('#interest-section').hide();
  $('#skills-section').hide();
  $('#awards-section').hide();
  $('#contact-section').hide();

  $('#brand').click(function() {
    $('#contact-section').hide();
    $('#awards-section').hide();
    $('#skills-section').hide();
    $('#interest-section').hide();
    $('#education-section').hide();
    $('#experience-section').hide();
    $('#about-section').show();
  });

  $('#about').click(function() {
    $('#contact-section').hide();
    $('#awards-section').hide();
    $('#skills-section').hide();
    $('#interest-section').hide();
    $('#education-section').hide();
    $('#experience-section').hide();
    $('#about-section').show();
  });

  $('#experience').click(function() {
    $('#contact-section').hide();
    $('#awards-section').hide();
    $('#skills-section').hide();
    $('#interest-section').hide();
    $('#education-section').hide();
    $('#experience-section').show();
    $('#about-section').hide();
  });

  $('#education').click(function() {
    $('#contact-section').hide();
    $('#awards-section').hide();
    $('#skills-section').hide();
    $('#interest-section').hide();
    $('#education-section').show();
    $('#experience-section').hide();
    $('#about-section').hide();
  });

  $('#interest').click(function() {
    $('#contact-section').hide();
    $('#awards-section').hide();
    $('#skills-section').hide();
    $('#interest-section').show();
    $('#education-section').hide();
    $('#experience-section').hide();
    $('#about-section').hide();
  });

  $('#skills').click(function() {
    $('#contact-section').hide();
    $('#awards-section').hide();
    $('#skills-section').show();
    $('#interest-section').hide();
    $('#education-section').hide();
    $('#experience-section').hide();
    $('#about-section').hide();
  });

  $('#awards').click(function() {
    $('#contact-section').hide();
    $('#awards-section').show();
    $('#skills-section').hide();
    $('#interest-section').hide();
    $('#education-section').hide();
    $('#experience-section').hide();
    $('#about-section').hide();
  });

  $('#contact').click(function() {
    $('#contact-section').show();
    $('#awards-section').hide();
    $('#skills-section').hide();
    $('#interest-section').hide();
    $('#education-section').hide();
    $('#experience-section').hide();
    $('#about-section').hide();
  });
});
