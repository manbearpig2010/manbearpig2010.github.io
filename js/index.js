const popouts = document.getElementsByClassName('popout_container');
for(i=0; i < popouts.length; i++){
	popouts[i].style.display = 'none';
}
var didTouch = false;
window.addEventListener('touchstart', didTheyTouch);
function didTheyTouch(){
	didTouch = true;
}
$(document).ready(function(){
	
if (window.innerWidth >= 1200){
const top_pic = document.querySelector('.top_pic_container img');
top_pic.setAttribute("src","https://cbbain.blob.core.windows.net/photos/site/homepage%20images/poolv5b.gif");
}
$(window).resize(function(){
if (window.innerWidth >= 1200){
const top_pic = document.querySelector('.top_pic_container img');
top_pic.setAttribute("src","https://cbbain.blob.core.windows.net/photos/site/homepage%20images/poolv5b.gif");
}
else if (window.innerWidth < 1200){
const top_pic = document.querySelector('.top_pic_container img');
top_pic.setAttribute("src","https://i.imgur.com/hnkOIpI.jpg");
}
});
var touchmoved;
/*if (didTouch == true){	
  $(".hotel_panel").on('touchend', touchScreen);
}
else{
     $(".hotel_panel").on('click', touchScreen);
}
*/
	 $(".hotel_panel").on('touchend click', function(){
if(touchmoved != true){
	
	if($(this).find("h3").text() == "View Offers"){
		$(this).find("h3").text("Hide Offers");
		}
	else {
		$(this).find("h3").text("View Offers");
		}
}
if(touchmoved != true){
	$(this).next(".popout_container").slideToggle();
}
  }).on('touchmove',function(e){
	  touchmoved = true;
  }).on('touchstart',function(){
	  touchmoved = false;
 });

 $(".nav_button").click(function(){
   $(this).next('.dropdown').toggleClass("flexer");
 });
});
/*var slideIndex = 1;
showSlides(slideIndex);
function moveSlide(n){
  showSlides(slideIndex += n);
}
function showSlides(n){
  var i;
  var slides = document.querySelectorAll('.slides');
  if (n > slides.length){slideIndex = 1;}
  if (n < 1){slideIndex = slides.length;}
  slides.forEach(slide => slide.style.display = "none");
  slides[slideIndex-1].style.display = "block";
}
*/
var slideIndex = new Array(4);
slideIndex[0]=1;
slideIndex[1]=1;
slideIndex[2]=1;
slideIndex[3]=1;
slideIndex[4]=1;
slideIndex[5]=1;

showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
function moveSlide(n, slideshownumber){
  slideIndex[slideshownumber] = slideIndex[slideshownumber] + n;
  showSlides(slideIndex[slideshownumber], slideshownumber);
}
function currentSlide(n, slideshownumber)
{
slideIndex[slideshownumber] = n;
  showSlides(slideIndex[slideshownumber], slideshownumber);
}
function showSlides(n, slideshownumber){
  var i;
  var slideshowname = "slider" + slideshownumber;
  var slides = document.getElementsByName(slideshowname);
  if (n > slides.length){slideIndex[slideshownumber] = 1;}
  if (n < 1){slideIndex[slideshownumber] = slides.length;}
  for (i=0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[slideIndex[slideshownumber]-1].style.display = "block";
}



/*
const previous = document.querySelector('.prev');
previous.addEventListener('click',moveSlide(-1));
const next = document.querySelector('.next');
next.addEventListener('click', moveSlide(1));
*/
