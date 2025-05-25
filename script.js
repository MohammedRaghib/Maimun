function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("menu-btn").classList.toggle("active");
}
function searchProducts() {
    let input = document.getElementById('search').value.toLowerCase();
    let products = document.querySelectorAll('.product');

    products.forEach(product => {
        let name = product.getAttribute('data-name').toLowerCase();
        product.style.display = name.includes(input) ? 'block' : 'none';
    });
}