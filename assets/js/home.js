// Masonry
$(document).ready(function(){
  var $grid = $('.grid');
  $grid.masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    percentPosition: true,
    stagger: 30,
    transitionDuration: '0.3s'
  });
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
});


// Modals
$('.grid-item').on('click', function(){
  var modalTarget = $(this).next('.modal');
  $(modalTarget).addClass('ready');
  setTimeout(function(){
    $(modalTarget).addClass('visible');
  },50);
  $('body').addClass('stuck');
});
function closeModal() {
  $('.modal').removeClass('visible');
  setTimeout(function(){
    $('.modal').removeClass('ready');
  },100);
  $('body').removeClass('stuck');
}$('.modal .close').on('click', function(){
  closeModal();
});
$('.modal').on().click(function (event) {
  if(!$(event.target).closest('.modal-content').length && !$(event.target).is('.modal-content')) {
    closeModal();
  }
});

// Tri
$(function() {
  var selectedClass = "";
  $('.tri p').click(function(){
    $('.tri p').removeClass('selected');
    $(this).toggleClass('selected');
    selectedClass = $(this).attr("data-rel");
    $(".grid").fadeTo(100, 0.1);
    if (selectedClass == "all") {
      setTimeout(function() {
        $(".grid-item").fadeIn();
        $(".grid").fadeTo(500, 1);
      }, 500);
    } else {
      $(".grid .grid-item").not("."+selectedClass).fadeOut();
      setTimeout(function() {
        $("."+selectedClass).fadeIn();
        $(".grid").fadeTo(500, 1);
      }, 500);
    }
    setTimeout(function() {
      $('.grid').masonry('layout');
    }, 500);
  });
});
