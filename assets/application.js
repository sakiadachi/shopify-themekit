$(window).on('load',function(){
  $('#myModal').removeClass('hide').addClass('show')
  $('.close-btn').click(function(){
    $('#myModal').removeClass('show').addClass('hide')
  });
});

