// Catalog Page JavaScript

let currentCategory = 'all';
let currentSearch = '';

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'electronics', name: 'Electrónica' },
  { id: 'clothing', name: 'Ropa' },
  { id: 'books', name: 'Libros' }
];

const products = [
  { name: 'Laptop', brand: 'Dell', category: 'electronics', description: 'Un portátil potente' },
  { name: 'T-Shirt', brand: 'Nike', category: 'clothing', description: 'Una camisa cómoda' },
  { name: 'Book', brand: 'Penguin', category: 'books', description: 'Un libro interesante' }
];

function createProductCard(product, isGrid) {
  return `
    <div class="product-card ${isGrid ? 'grid-item' : 'list-item'}">
      <h3>${product.name}</h3>
      <p>${product.brand}</p>
      <p>${product.description}</p>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', function() {
  // Initialize mobile menu
  initMobileMenu();
  
  // Load categories
  loadCategories();
  
  // Check URL params for category
  const params = new URLSearchParams(window.location.search);
  const categoryParam = params.get('categoria');
  if (categoryParam) {
    currentCategory = categoryParam;
  }
  
  // Load products
  filterAndDisplayProducts();
  
  // Setup search
  setupSearch();
  
  // Setup reset filters
  const resetBtn = document.getElementById('resetFilters');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetFilters);
  }
});

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

function loadCategories() {
  const container = document.getElementById('categoryFilters');
  if (!container) return;
  
  container.innerHTML = categories.map(cat => `
    <button 
      class="category-btn px-4 py-2 rounded-lg font-medium transition-colors ${
        cat.id === currentCategory 
          ? 'bg-primary text-primary-foreground' 
          : 'bg-card border border-border text-foreground hover:bg-muted'
      }"
      data-category="${cat.id}"
    >
      ${cat.name}
    </button>
  `).join('');
  
  // Add click handlers
  container.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      currentCategory = this.dataset.category;
      updateCategoryButtons();
      filterAndDisplayProducts();
      
      // Update URL
      const url = new URL(window.location);
      if (currentCategory === 'all') {
        url.searchParams.delete('categoria');
      } else {
        url.searchParams.set('categoria', currentCategory);
      }
      window.history.replaceState({}, '', url);
    });
  });
}

function updateCategoryButtons() {
  document.querySelectorAll('.category-btn').forEach(btn => {
    if (btn.dataset.category === currentCategory) {
      btn.className = 'category-btn px-4 py-2 rounded-lg font-medium transition-colors bg-primary text-primary-foreground';
    } else {
      btn.className = 'category-btn px-4 py-2 rounded-lg font-medium transition-colors bg-card border border-border text-foreground hover:bg-muted';
    }
  });
}

function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearch');
  
  if (!searchInput) return;
  
  let debounceTimeout;
  
  searchInput.addEventListener('input', function() {
    clearTimeout(debounceTimeout);
    currentSearch = this.value;
    
    // Show/hide clear button
    if (clearBtn) {
      clearBtn.classList.toggle('hidden', !currentSearch);
    }
    
    debounceTimeout = setTimeout(() => {
      filterAndDisplayProducts();
    }, 300);
  });
  
  if (clearBtn) {
    clearBtn.addEventListener('click', function() {
      searchInput.value = '';
      currentSearch = '';
      this.classList.add('hidden');
      filterAndDisplayProducts();
    });
  }
}

function filterAndDisplayProducts() {
  let filteredProducts = products;
  
  // Filter by category
  if (currentCategory !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.category === currentCategory);
  }
  
  // Filter by search
  if (currentSearch) {
    const query = currentSearch.toLowerCase();
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );
  }
  
  displayProducts(filteredProducts);
}

function displayProducts(productsToShow) {
  const grid = document.getElementById('productsGrid');
  const emptyState = document.getElementById('emptyState');
  const resultsCount = document.getElementById('resultsCount');
  
  if (!grid) return;
  
  if (productsToShow.length === 0) {
    grid.classList.add('hidden');
    emptyState?.classList.remove('hidden');
    if (resultsCount) resultsCount.textContent = 'No se encontraron productos';
  } else {
    grid.classList.remove('hidden');
    emptyState?.classList.add('hidden');
    grid.innerHTML = productsToShow.map(product => createProductCard(product, true)).join('');
    if (resultsCount) {
      resultsCount.textContent = `Mostrando ${productsToShow.length} producto${productsToShow.length !== 1 ? 's' : ''}`;
    }
  }
}

function resetFilters() {
  currentCategory = 'all';
  currentSearch = '';
  
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearch');
  
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.classList.add('hidden');
  
  updateCategoryButtons();
  filterAndDisplayProducts();
  
  // Clear URL params
  window.history.replaceState({}, '', window.location.pathname);
}
