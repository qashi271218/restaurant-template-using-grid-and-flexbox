const navSlide=()=>{
const burger=document.querySelector('.burger');
const nav=document.querySelector('.nav-links');
const navLinks=document.querySelectorAll('.nav-links li');
burger.addEventListener('click',()=>{
	//toggle nav
nav.classList.toggle('nav-active');
//animate nav
navLinks.forEach((link,index)=>{
if(link.style.animation)
{
	link.style.animation='';
}
else
{
	link.style.animation=`navLinkFade 0.1s ease forwards ${index/7 + 0.1}s`;
}
});
//burger toogle
burger.classList.toggle('toggle');
});
}
navSlide();

//preloader
var preloader=document.getElementById('loading');
    function myFunction()
    {
        preloader.style.display='none';
    }


//sticky nav
const nav = document.querySelector('.nav');
const navTop = nav.offsetTop;

function stickyNavigation() {
  if (window.scrollY >= navTop) {
    // nav offsetHeight = height of nav
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', stickyNavigation);

//horizontal nav
  $( function() {
    $( "#tabs" ).tabs();
  });


//vertical tab

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//carousel
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "grid"; 
  slides[slideIndex-1].style.gridTemplateColumns = "repeat(auto-fit,minmax(25rem,1fr))"; 
  slides[slideIndex-1].style.gridGap = "2rem"; 
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


//back to top

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 1500);
});






//magnigic popup
$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
    type: 'iframe',
    // other options
    iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>', 

        patterns: {
          youtube: {
            index: 'youtube.com/', 

            id: 'v=',

            src: 'https://www.youtube.com/embed/%id%' 
          },


        },

        srcAction: 'iframe_src', 
      }
  });
});


// Smooth Scrolling
   $(document).ready(function(){
    $( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
});
