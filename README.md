# Flagship Coding Test
Developing a theme for shopify with themekit, liquid and knowledge of HTML/CSS, Sass and Javascript.

- [shopify page](https://saki-adachi.myshopify.com/)  
  Styled as an online fashion store for people who like minimal design. 
  

## Test
a. Product page. Replace “Add to cart” button with a JavaScript async “Add to cart”.
Meaning, this new button should not redirect to the Cart page, it should just add the new product to the cart with an ajax request.
- i. Extra 1: “Add to cart” button should be grey when there is no stock. When there is stock, it should be green and blue on hover.
- ii. Extra 2: “Add to cart” should say “Low stock” where there are less than 5 units. Do NOT use JavaScript for this, check Liquid.


b. Add a new Theme Settings called “Coding Test” with a text field called “Random Title” where a random text can be populated. That title should appear anywhere in the theme.
- i. Extra 1: Print the value of that “Random Title” with a JavaScript console.log()
- ii. Extra 2: Create a new Theme Section where you will be able to select a single
collection, it should be able to show the products of that collection ordered by
title.


c. When the user accesses the product page, a Popup or Modal dialog should appear. (Use
whichever library you want to).
- i. Extra 1: The modal should show how much stock does the current product have.
- ii. Extra 2: The modal dialog should show information about the current user cart (which items are already in the cart, how many, total amount in the cart, etc)

