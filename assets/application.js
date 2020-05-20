$(window).on('load',function(){
    $('#product-modal').removeClass('hide').addClass('show')
    $('.close-btn').click(function(){
        $('#product-modal').removeClass('show').addClass('hide')
    });
    const randomText = $('.random-title').html();
        console.log("Random title: " + randomText);
});

// function addItemToCart(event){
//     event.preventDefault();

//     jQuery.ajax({
//             type: 'POST',
//             url: '/cart/add.js',
//             data: $('#'+'add-to-cart-form').serialize(),
//             dataType: 'json',
//             success: function() {
//                 updateCartItem();
//             },
//     });
// }
// function updateCartItem(e) {
//     const addItemModal = document.getElementById("new-cart-item");
//     addItemModal.style.display = "inherit";
// }
// const span = document.getElementsByClassName("modal-close");
// span.addEventListener('click', closeModal);

// function closeModal() {
//     const addItemModal = document.getElementById("new-cart-item");
//     addItemModal.style.display = "none";
// }
// window.addEventListener('DOMContentLoaded', (event) => {
//     const addToCartButton = document.getElementById("add-to-cart-btn");
//     const stock = "{{ product.variants.first.inventory_quantity }}";
//     if(stock > 0) {
//         addToCartButton.classList.add("instock");
//     } else {
//         addToCartButton.classList.add("nostock");
//     }
//     console.log(stock)
// });
