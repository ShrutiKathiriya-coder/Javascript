document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("product-form");
    const cartItemsContainer = document.getElementById("cart-items");

    let editIndex = null; // Track which product is being edited

    // Handle form submission
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("productname").value;
            const price = document.getElementById("productprice").value;
            const quantity = document.getElementById("productquantity").value;
            const size = document.getElementById("productsize").value;
            const color = document.getElementById("productcolor").value;

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            if (editIndex !== null) {
                // Update existing product
                cart[editIndex] = { name, price, quantity, size, color };
                alert("Product updated successfully!");
                editIndex = null;
            } else {
                // Add new product
                cart.push({ name, price, quantity, size, color });
                alert("Product added to cart!");
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            form.reset();
            window.location.href = "addcart1.html"; 
        });
    }

    // Display cart items
    if (cartItemsContainer) {
        function displayCart() {
            cartItemsContainer.innerHTML = "";
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            if (cart.length === 0) {
                cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
                return;
            }

            cart.forEach((item, index) => {
                const productDiv = document.createElement("div");
                productDiv.classList.add("cart-item");
                productDiv.innerHTML = `
                    <p><strong>Name:</strong> ${item.name}</p>
                    <p><strong>Price:</strong> $${item.price}</p>
                    <p><strong>Quantity:</strong> ${item.quantity}</p>
                    <p><strong>Size:</strong> ${item.size}</p>
                    <p><strong>Color:</strong> ${item.color}</p>
                    <button onclick="editProduct(${index})">Edit</button>
                    <button onclick="removeProduct(${index})">Remove</button>
                    <hr>
                `;
                cartItemsContainer.appendChild(productDiv);
            });
        }

        displayCart();

        // Remove product from cart
        window.removeProduct = function (index) {
            let cart = JSON.parse(localStorage.getItem("cart"));
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Product removed!");
            displayCart();
        };

        // Edit product (populate form with existing data)
        window.editProduct = function (index) {
            let cart = JSON.parse(localStorage.getItem("cart"));
            let product = cart[index];

            localStorage.setItem("editIndex", index); // Save index for update

            // Store product details in local storage and redirect
            localStorage.setItem("editProduct", JSON.stringify(product));
            window.location.href = "addcart.html";
        };
    }

    // If redirected for editing, prefill the form
    if (localStorage.getItem("editProduct")) {
        let product = JSON.parse(localStorage.getItem("editProduct"));
        document.getElementById("productname").value = product.name;
        document.getElementById("productprice").value = product.price;
        document.getElementById("productquantity").value = product.quantity;
        document.getElementById("productsize").value = product.size;
        document.getElementById("productcolor").value = product.color;

        editIndex = localStorage.getItem("editIndex"); // Set the edit index

        // Clear local storage after prefilling
        localStorage.removeItem("editProduct");
        localStorage.removeItem("editIndex");
    }
});