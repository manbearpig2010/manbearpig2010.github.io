const menu = document.querySelector('.menu');
const menuContainer = document.querySelector('.menu-lines');
const menuLine = document.getElementsByClassName('line');

menuContainer.addEventListener('click',rotateForward);

function rotateForward(){
  $('.menu').toggleClass('slide');
  this.childNodes[5].classList.toggle('rotate');
  this.childNodes[3].classList.toggle('noDisplay');
  this.childNodes[1].classList.toggle('rotateTwo');
}
let slideIndex = 0;
var dots = document.getElementsByClassName('dots');
const slides = document.getElementsByClassName('slides');

function dotMove(){
    for(i=0;i<dots.length;i++){
      dots[i].classList.remove('active');
    }
    dots[slideIndex].classList.add('active');
  }
  function showSlide(){
  for(i=0;i < slides.length;i++){
    slides[i].style.display ="none";
  }
    slides[slideIndex].style.display ="block";
 
   
}
 function moveSlide(index){
    slideIndex = index;
    dotMove();
   showSlide();
   
   
  }
function moveOne(){
  slideIndex ++;
  if(slideIndex > 2){
    slideIndex = 0;
  }
  if(slideIndex < 0){
    slideIndex = 2;
  }
  
  console.log(slideIndex);
  showSlide();
}
function autoSlide(){
  moveOne();
  dotMove();
  setTimeout(autoSlide,5000);
}

dotMove();
showSlide();
setTimeout(autoSlide,5000);
/*autoSlide();*/
// Scrolling functions
var top_part = $('.top-part').offset().top;
var ss_image = $('.ss-image').offset().top;
var checkbox = document.getElementsByClassName('check-box');
var section_heading = document.getElementsByClassName('section-heading');
var headingOne = section_heading[0].offsetTop;
var headingTwo = section_heading[1].offsetTop;
var headingThree = section_heading[2].offsetTop;
var checkHeight = $('.check-box').offset().top;
const checkOne = checkbox[0];
const checkTwo = checkbox[1];
const checkThree = checkbox[2];
const checkboxOne = checkbox[0].offsetTop;
const checkboxTwo = checkbox[1].offsetTop;
const checkboxThree = checkbox[2].offsetTop;
var bottom_part = $('.bottom-part').offset().top;

const expert_box = document.getElementsByClassName('ts-expert-box');
var expert_height = $('.ts-expert-box').offset().top;

var pic_box = document.getElementsByClassName('ts-pic-box');
const picBoxOne = pic_box[0].offsetTop;
const picBoxTwo = pic_box[1].offsetTop;
const picBoxThree = pic_box[2].offsetTop;
const picBoxFour = pic_box[3].offsetTop;
const picBoxFive = pic_box[4].offsetTop;
const picBoxContain = document.querySelector('.ts-pic-box-container').offsetTop;

const numbers = document.getElementsByClassName('fs-numbers');
const numberOne = numbers[0];
const numberTwo = numbers[1];
const numberThree = numbers[2];
const numberFour = numbers[3];
var numberOnePos = numberOne.offsetTop;
var numberTwoPos = numberTwo.offsetTop;
var numberThreePos = numberThree.offsetTop;
var numberFourPos = numberFour.offsetTop;

const last_box = document.getElementsByClassName('ffs-info-box');
const lastOne = last_box[0];
const lastTwo = last_box[1];
const lastThree = last_box[2];
const lastFour = last_box[3];
const lastFive = last_box[4];
const lastSix = last_box[5];
var lastOnePos = lastOne.offsetTop;
var lastTwoPos = lastTwo.offsetTop;
var lastThreePos = lastThree.offsetTop;
var lastFourPos = lastFour.offsetTop;
var lastFivePos = lastFive.offsetTop;
var lastSixPos = lastSix.offsetTop;

const lastSect = document.querySelector('.last-section');
var lastSectPos = lastSect.offsetTop;

var didFireOne = false;
var didFireTwo = false;
var didFireThree = false;
var didFireFour = false;
$(window).on('scroll',function(){
  var y_pos = window.pageYOffset;
  var scroll_pos = ss_image;
  
  if(y_pos > (scroll_pos - 00)){
    $('.ss-image').addClass('fly-in');
  }

  if(y_pos > (headingOne - 400)){
    section_heading[0].classList.add('fly-in');
  }
 
  if(y_pos > (checkHeight - 400)){
    checkOne.classList.add('fly-in');
  }
  if(y_pos > (checkHeight -300)){
  checkTwo.classList.add('fly-in');
  }
  if(y_pos > (checkHeight - 200)){
    checkThree.classList.add('fly-in');
  }
  if(y_pos > (headingTwo - 400)){
    section_heading[1].classList.add('fly-in');
  }
  if(y_pos > (expert_height - 400)){
    expert_box[0].classList.add('fly-in');
  }
  if(y_pos > (expert_height - 300)){
    expert_box[1].classList.add('fly-in');
  }
  if(y_pos > (expert_height - 200)){
    expert_box[2].classList.add('fly-in');
  }
  if(y_pos > (expert_height -100)){
    expert_box[3].classList.add('fly-in');
  }
  if(y_pos > (headingThree - 400)){
    section_heading[2].classList.add('fly-in');
  }
  if(y_pos > (picBoxContain + picBoxOne) - 400){
    pic_box[0].classList.add('fly-in');
  }
  if(y_pos > (picBoxContain + picBoxTwo) - 400){
    pic_box[1].classList.add('fly-in');
  }
  if(y_pos > (picBoxContain + picBoxThree) - 400){
    pic_box[2].classList.add('fly-in');
  }
  if(y_pos > (picBoxContain + picBoxFour) - 400){
    pic_box[3].classList.add('fly-in');
  }
  if(y_pos > (picBoxContain + picBoxFive) - 400){
    pic_box[4].classList.add('fly-in');
  }
  
 if(y_pos > (lastOnePos - 400)){
    lastOne.classList.add('fly-in');
  }
    if(y_pos > (lastTwoPos - 400)){
    lastTwo.classList.add('fly-in');
  }
    if(y_pos > (lastThreePos - 400)){
    lastThree.classList.add('fly-in');
  }
    if(y_pos > (lastFourPos - 400)){
    lastFour.classList.add('fly-in');
  }
    if(y_pos > (lastFivePos - 400)){
    lastFive.classList.add('fly-in');
  }
    if(y_pos > (lastSixPos - 400)){
    lastSix.classList.add('fly-in');
  }
  if(y_pos > (numberOnePos - 350)){
    if (didFireOne == false){
      getCounterOne(0,1570,1,numberOne);
    }
      didFireOne = true;
  }
  
  
   if(y_pos > (numberTwoPos - 350)){
    if (didFireTwo == false){
   getCounterTwo(1,5659,1,numberTwo);
    }
     didFireTwo = true;
   }
   if(y_pos > (numberThreePos - 350)){
     if(didFireThree == false){
   getCounterThree(1,2681,1,numberThree);
     }
     didFireThree = true;
  }
   if(y_pos > (numberFourPos - 350)){
    if (didFireFour == false){
  getCounterFour(0,357,1,numberFour)
    }
    didFireFour = true;
  }
  if(y_pos > (lastSectPos - 500)){
    lastSect.classList.add('fly-in');
  }
});
// Counting functions
function getCounterOne(starter,ender,time,html){
    var startCount = starter;
    var endCount = ender;
    var timer = time;
    var increament = startCount  < endCount ? 1:-1;
        timmer  = setInterval(function(){
           if(startCount  > endCount){
                    clearInterval(timmer);
                }
                startCount += increament + 9;
                html.innerHTML = startCount ;
              
            },timer);
   }

function getCounterTwo(start,end,t,h){
    var startC = start;
    var endC = end;
    var tim = t;
    var increaments = startC  < endC ? 1:-1;
        timmers  = setInterval(function(){
                startC += increaments + 9;
                h.innerHTML = startC ;
          console.log("B",startC);
                if(startC  > endC){
                    clearInterval(timmers);
                }
            },t);
   }
function getCounterThree(startthree,endthree,tthree,hthree){
    var start3 = startthree;
    var end3 = endthree;
    var tim3 = tthree;
    var increaments3 = start3  < end3 ? 1:-1;
        timmers3  = setInterval(function(){
                start3 += increaments3 + 9;
                hthree.innerHTML = start3 ;
                if(start3  > end3){
                    clearInterval(timmers3);
                }
            },tim3);
   }
function getCounterFour(start4,end4,time4,html4){
    var startfour = start4;
    var endfour = end4;
    var timefour = time4;
    var increaments = startfour  < endfour ? 1:-1;
        timmers4  = setInterval(function(){
                startfour += increaments ;
                html4.innerHTML = startfour ;
         
                if(startfour  > endfour){
                    clearInterval(timmers4);
                }
            },time4);
   }
