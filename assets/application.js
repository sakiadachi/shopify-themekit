$(window).on('load',function(){
    $('#myModal').removeClass('hide').addClass('show')
    $('.close-btn').click(function(){
        $('#myModal').removeClass('show').addClass('hide')
    });
    const randomText = $('.random-title').html();
        console.log("Random title: " + randomText);
});