/*------------------
  Preloder
--------------------*/
 // 'use strict';
 // $(window).on('load', function() {
 // 	$(".loader").fadeOut();
 // 	$("#preloder").delay(400).fadeOut("slow");
 // });
 //

'use strict';
$(window).on('load', function() {
 	$(".loader").fadeOut();
 	$("#preloder").delay(3000).fadeOut("slow");
 });
 var LOADER_CONTAINER = $("#loader");
 var LOADER_INTERVAL = 1600;
 var LOADERS = [
   ["🌶","Rebanando chiles"],
   ["🔪","Afilando cuchillos"],
   ["👩🏽‍🍳","Planchando delantales"],
   ["🥒","Friendo vegetales"],
   ["🍳","Friendo huevos"],
   ["🧀","Cortando queso"],
   // ["🥓","Crisping bacon"],
   ["🌽","Desgranando maíz"],
   ["🍚","Cociendo arroz"],
   ["🍞","Horneando pan"],
   ["🍷","Descorchando vino"],
   ["🍽","Emplatando"],
   ["🍤","Frying shrimp"],
   ["🥐","Tostando croissants"],
   ["🍋","Exprimiendo limones"],
   ["🥕","Pelando zanahorias"],
   ["🍲","Removiendo sopas"],
   ["🐸🍵","Derramando té"],
   ["🍕","Horneando pizzas"],
   // ["🔥","Lighting burners"],
   ["🥔","Rostizando patatas"],
   // ["🤔","Testing tastes"],
   ["🍊","Exprimiendo naranjas"],
   ["💧","Hirviendo agua"],
   ["🍦","Congelando helado"],
   ["🍨","Sirviendo postres"],
   ["🥗","Mezclando ensaladas"],
   ["🥚","Rompiendo huevos"],
   ["🥞","Apilando pancakes"],
   ["🍒","Poniendo la cereza al pastel"],
   ["🍗","Condimentando pollo"],
   ["🍅","Aplastando tomates"],
   ["🍍","Picando piñas"],
   ["💖","Poniendo una pizca de amor"],
   ["📝","Escribiendo recetas"],
   ["🌰","Cascando nueces"],
   ["🍿","Haciendo palomitas"],
   // ["🍾","Popping champers"],
   ["🍆","Salando berenjenas"],
   ["🥑","Rebanando aguacates"],
   ["🍌","Pelando plátanos"],
   // ["🍔","Flipping burgers"],
   // ["🍻","Clinking glasses"],
   // ["🍴","Polishing silverware"],
   ["🍪","Horneando galletas"],
   ["🍣","Enrollando sushi"],
   // ["🍶","Warming sake"],
   // ["🍱","Boxing bento"],
   ["🌯","Haciendo burritos"],
   ["☕️","Preparando café"],
   ["🍏","Pelando manzanas"],
   ["🌿","Cultivando hierbas"],
   ["🍰","Rebanando pastel"],
   ["🍟","Friendo patatas"],
   ["🍑","Cortando duraznos"],
   ["🍛","Preparando curry"],
   ["🌮","Armando tacos"],
   ["📸","Fotografiando platillos"],
   // ["🛎","D"],
   ["🍫","Derritiendo chocolate"],
   // ["🍜","Cooking ramen"],
   ["🥖","Horneando baguettes"],
   ["❄️","Picando hielo"],
   ["🥛","Mezclando malteadas"],
   ["🍄","Cortando hongos"],
   ["🐟","Sellando pescado"],
   ["😋","Chupando labios"],
   ["🤞🏾","Cruzando dedos"],
   // ["👊🏿","Bumping fists"],
   ["☝🏽","Poniendo el último ingrediente"],
   // ["😙👌","Doing that Italian chef thing"],
   ["👃🏻","Olfateando olores"],
   // ["🍹","Mixing drinks"],
   // ["✨","Making magic"],
   // ["🌱","Planting seeds"],
   // ["⚗️","Testing something new"],
 ]

 $(document).ready(function() {

   var cycleLoader = function() {
     var index = Math.floor(Math.random() * LOADERS.length);
     var selected = LOADERS[index];
     var selectedEmoji = selected[0];
     var selectedText = selected[1];

     // First transition out the old loader
     setTimeout(function(){
       LOADER_CONTAINER.children().addClass("animateOut");
     }, LOADER_INTERVAL - 300); // This negative value should be the same as $animation-duration in the CSS

     // Then remove the animated out divs
     LOADER_CONTAINER.children(".emoji").last().remove();
     LOADER_CONTAINER.children(".text").last().remove();

     // Then animate in the new one
     LOADER_CONTAINER.append('<div class="emoji">' + selectedEmoji + '</div>');
     LOADER_CONTAINER.append('<div class="text">' + selectedText + '</div>');
   }

   setInterval(cycleLoader, LOADER_INTERVAL);
   cycleLoader(); // Run first time without delay

 });

/*-----------------
    Toggler
-----------------*/
document.getElementById('menu-toggle')
.addEventListener('click', function(){
  document.body.classList.toggle('nav-open');
});
//--  Search bar Placeholder --//
window.onload = function(){
    document.getElementById('gsc-i-id1').placeholder = 'Buscar recetas';
  };
/*-----------------
    Owl Carousel
-----------------*/
  jQuery(document).ready(function($) {
  "use strict";
  $('#recipe-carousel').owlCarousel( {
  		loop: true,
  		center: true,
  		items: 3,
  		margin: 30,
  		autoplay: true,
  		dots:true,
      nav:true,
  		autoplayTimeout: 8500,
  		smartSpeed: 450,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  		responsive: {
  			0: {
  				items: 1
  			},
  			768: {
  				items: 2
  			},
  			1170: {
  				items: 3
  			}
  		}
  	});
  });
/*------------------
    Scroll to top button
--------------------*/

var btn = $('#button');
$(window).scroll(function() {
if ($(window).scrollTop() > 300) {
  btn.addClass('show');
} else {
  btn.removeClass('show');
}
});
btn.on('click', function(e) {
e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');
});
/*------------------
  Gets current year in footer:
--------------------*/
document.getElementById("year").innerHTML = new Date().getFullYear();
