// Opens Modal when the user access on the product page (c)
$(window).on('load',function(){
    $('#product-modal').removeClass('hide').addClass('show')
    $('.close-btn').click(function(){
        $('#product-modal').removeClass('show').addClass('hide')
    });
    // Print the value of "Random Title" on console (b.i.)
    const randomText = $('.random-title').html();
        console.log("Random title: " + randomText);
})