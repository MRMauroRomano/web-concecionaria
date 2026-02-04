// Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  initMobileMenu();
  
  // Load Featured Products on Homepage
  loadFeaturedProducts();
});

// Mobile Menu Functionality
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      const isOpen = !mobileMenu.classList.contains('hidden');
      
      if (isOpen) {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      } else {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      }
    });
  }
}

// Load Featured Products
function loadFeaturedProducts() {
  const container = document.getElementById('featuredProducts');
  
  // Declare getFeaturedProducts and createProductCard functions
  function getFeaturedProducts() {
    // Dummy implementation for demonstration purposes
    return [
      { name: 'Product 1', description: 'Description 1' },
      { name: 'Product 2', description: 'Description 2' },
      { name: 'Product 3', description: 'Description 3' }
    ];
  }

  function createProductCard(product) {
    return `
      <div class="product-card">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
      </div>
    `;
  }

  if (container && typeof getFeaturedProducts === 'function') {
    const featured = getFeaturedProducts().slice(0, 3);
    container.innerHTML = featured.map(product => createProductCard(product)).join('');
  }
}
