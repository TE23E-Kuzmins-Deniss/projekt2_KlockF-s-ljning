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
    updateCartCount(); // Uppdatera siffran på varukorgen
}

// Kör när sidan laddas
document.addEventListener('DOMContentLoaded', updateCartCount);

// Funktion för att visa kundvagnens innehåll
function showCartContents() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Din kundvagn är tom.");
        return;
    }

    let cartDetails = "Din kundvagn innehåller:\n";
    cart.forEach(item => {
        cartDetails += `- ${item.productName} (${item.price.toLocaleString()} SEK)\n`;
    });
    alert(cartDetails);
}

// Lägg till event listener för att visa kundvagnen (om du vill visa innehållet utan att navigera)
document.addEventListener('DOMContentLoaded', () => {
    const cartLink = document.querySelector('.cart-link');
    if (cartLink) {
        cartLink.addEventListener('click', (event));
    }
});