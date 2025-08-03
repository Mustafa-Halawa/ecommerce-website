// shop.js

// Example: Show alert when a product is added to cart
document.addEventListener("DOMContentLoaded", () => {
  const cartButtons = document.querySelectorAll(".add-to-cart");

  cartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const title = btn
        .closest(".product-item")
        .querySelector(".product-title").textContent;
      alert(`"${title}" added to your cart!`);
    });
  });
});
