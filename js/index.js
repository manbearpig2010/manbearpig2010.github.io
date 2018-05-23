var dropdown = document.querySelector(".dropdown-container");
var dropdownTwo = document.getElementsByClassName("dd-dd-container");
if(window.innerWidth < 900){
dropdown.style.display = 'none';
}

$(window).resize(function(){
  if(window.innerWidth < 900){
    dropdown.style.display = 'none';
  }
  else{
    dropdown.style.display = 'flex';
    
  }
});
  dropdownTwo[0].style.display = 'none';
dropdownTwo[1].style.display = 'none';

$(document).ready(function(){
  if(window.innerWidth < 1200){
  $('.menu').click(function(){
    $('.dropdown-container').slideToggle();
  });
  $('.dropdown-content').click(function(){
    $(this).find('div').slideToggle();
   
  });
  }
  else{
    return;
  }
});

let slideIndex = -1;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dots");
var slideOn = true;


autoSlide();

function autoSlide() {
  slides.forEach(slide => (slide.style.display = "none"));
  slideIndex++;
  if (slideIndex > 2) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length;
  }
  slides[slideIndex].style.display = "block";
  if (slideOn == true) {
    setTimeout(autoSlide, 10000);
  }
  for (i = 0; i < dots.length; i++) {
    if (i == slideIndex) {
      dots[i].classList.add("active");
    } else {
      dots[i].classList.remove("active");
    }
  }
}

function showSlides() {
  slides.forEach(slide => (slide.style.display = "none"));
  for (i = 0; i < slides.length; i++) {
    if (i == slideIndex) {
      slides[i].style.display = "block";
    }
  }

  for (i = 0; i < dots.length; i++) {
    if (i == slideIndex) {
      dots[i].classList.add("active");
    } else {
      dots[i].classList.remove("active");
    }
  }
}
slides.forEach(slide => (slide.style.display = "none"));
for (i = 0; i < slides.length; i++) {
  if (i == slideIndex) {
    slides[i].style.display = "block";
  }
}
for (i = 0; i < dots.length; i++) {
  if (i == slideIndex) {
    dots[i].classList.add("active");
  } else {
    dots[i].classList.remove("active");
  }
}

function dotSlide(num) {
  slideIndex = num;
  console.log(slideIndex);
  showSlides();
  
}
function moveSlide(num) {
  slideIndex += num;
  if (slideIndex > 2) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = 2;
  }
  console.log(slideIndex);
  showSlides();
}
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
for(i=0; i < months.length; i++){
  if(i == mm -1){
    mm = months[i];
  }
}

today = mm + ' ' + dd + ', ' + yyyy;
var date = document.getElementsByClassName('date');
for(i=0; i < date.length; i++){
date[i].innerText = today;
}
date[0].innerText = today;
var messageNumber = 3;
const message = document.getElementsByClassName('message-number');
for (i=0; i < message.length; i++){
  message[i].innerText = messageNumber;
}

  function toTop(){
  $('html, body').animate({scrollTop:0}, 'slow');
  
}