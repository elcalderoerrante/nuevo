//--      Toggler    --//
document.getElementById('menu-toggle')
.addEventListener('click', function(){
  document.body.classList.toggle('nav-open');
});

$(function() {
  $(document).click(function (event) {
    $('.navbar-collapse').collapse('hide');
  });
});
