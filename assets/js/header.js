$('header .toggle').on('click', function(){
  console.log('toggle');
  $(this).parents('header').toggleClass('in');
});
