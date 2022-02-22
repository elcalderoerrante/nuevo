//--        Toggler          --//
document.getElementById('menu-toggle')
.addEventListener('click', function(){
  document.body.classList.toggle('nav-open');
});
//--  Search bar Placeholder --//
window.onload = function(){
    document.getElementById('gsc-i-id1').placeholder = 'Buscar recetas';
  };
//--       Owl Carousel     --//

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
