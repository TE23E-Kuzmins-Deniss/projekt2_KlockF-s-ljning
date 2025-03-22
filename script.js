// Funktion för att uppdatera kundvagnsantalet
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCount.textContent = cart.length;
}
// Funktion för att lägga till produkter i varukorgen
function addToCart(productName, price, imageUrl) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ productName, price, image: imageUrl });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} har lagts till i varukorgen!`);
    updateCartCount();
}
