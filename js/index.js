const product = document.querySelector('.product');
const productDropdown = document.querySelector('.product-dropdown');
const addtoCart = document.querySelector('.addtoCart');
const cart = document.querySelector('.addtocart');
const noBut = document.querySelector('.noBut');

product.addEventListener('click', function() {
    productDropdown.classList.toggle('active-dropdown');
});

addtoCart.addEventListener("click", () => {
    cart.classList.add('active-cart');
});

noBut.addEventListener("click", () => {
    cart.classList.remove('active-cart');
});