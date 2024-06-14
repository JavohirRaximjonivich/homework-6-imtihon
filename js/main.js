document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const productList = document.getElementById('productList');
    const logoutBtn = document.getElementById('logoutBtn');
    let products = [];
    let editIndex = null;

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const price = parseFloat(document.getElementById('price').value);
        const description = document.getElementById('description').value;

        const product = {
            id: Date.now(),
            title,
            price,
            description
        };

        if (editIndex !== null) {
            products[editIndex] = product;
            editIndex = null;
        } else {
            products.push(product);
        }

        displayProducts();
        productForm.reset();
    });

    logoutBtn.addEventListener('click', () => {
        const confirmLogout = confirm('rostan chiqishni hohlaysizmi?');
        if (confirmLogout) {
          window.location.href = 'index.html';
        }
      });
    function displayProducts() {
        productList.innerHTML = products.map((product, index) => `
            <div class="product-item">
                <h3>${product.title}</h3>
                <p>Price: $${product.price}</p>
                <p>Description: ${product.description}</p>
                <button class="edit-btn" onclick="editProduct(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteProduct(${index})">Delete</button>
            </div>
        `).join('');
    }

    window.editProduct = function(index) {
        const product = products[index];
        document.getElementById('title').value = product.title;
        document.getElementById('price').value = product.price;
        document.getElementById('description').value = product.description;
        editIndex = index;
    }

    window.deleteProduct = function(index) {
        products.splice(index, 1);
        displayProducts();
    }
});
