// Global search functions
window.handleSearch = function() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    window.location.href = `products?search=${encodeURIComponent(searchTerm)}`;
  } else {
    window.location.href = 'products';
  }
};

window.handleSearchKeyPress = function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    window.handleSearch();
  }
};

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  
  if (searchInput) {
    searchInput.removeAttribute('onkeypress');
    searchInput.addEventListener('keypress', window.handleSearchKeyPress);
  }
  
  if (searchButton) {
    searchButton.removeAttribute('onclick');
    searchButton.addEventListener('click', window.handleSearch);
  }
});
