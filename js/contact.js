// Contact Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize mobile menu
  initMobileMenu();
  
  // Check URL params for product
  const params = new URLSearchParams(window.location.search);
  const producto = params.get('producto');
  if (producto) {
    const productoInput = document.getElementById('producto');
    if (productoInput) {
      productoInput.value = decodeURIComponent(producto);
    }
  }
  
  // Setup form
  setupForm();
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

function setupForm() {
  const form = document.getElementById('form');
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  const sendAnother = document.getElementById('sendAnother');
  const submitBtn = document.getElementById('submitBtn');
  
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Show loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Enviando...
      `;
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      contactForm.querySelector('h2').classList.add('hidden');
      form.classList.add('hidden');
      successMessage.classList.remove('hidden');
      
      // Reset button
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
        </svg>
        Enviar Mensaje
      `;
    });
  }
  
  if (sendAnother) {
    sendAnother.addEventListener('click', function() {
      // Reset form
      form.reset();
      
      // Show form again
      contactForm.querySelector('h2').classList.remove('hidden');
      form.classList.remove('hidden');
      successMessage.classList.add('hidden');
    });
  }
}
