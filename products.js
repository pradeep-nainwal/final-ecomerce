const menProducts = [
  {
      id: 1,
      name: "Men Beige Slim Fit Blazer",
      brand: "United Colors Of Benetton",
      price: 2549,
      imageUrl: "images/p1.avif"
  },
  {
      id: 2,
      name: "Men white cotton shirt",
      brand: "Puma",
      price: 7992,
      imageUrl: "images/p2.avif"
  },
  {
      id: 3,
      name: "Mens brown hoodie",
      brand: "Hush Puppies",
      price: 6999,
      imageUrl: "images/p3.avif"
  },
  {
      id: 4,
      name: "Men Blue Denim Jeans",
      brand: "Levi's",
      price: 3599,
      imageUrl: "images/p4.avif"
  },
  {
      id: 5,
      name: "Men green Solid T-shirt",
      brand: "Zara",
      price: 1999,
      imageUrl: "images/p5.avif"
  },
  {
      id: 6,
      name: "Men Red & whiteCasual Shirt",
      brand: "Nike",
      price: 2999,
      imageUrl: "images/p6.avif"
  },
  {
      id: 7,
      name: "Men Olive Green Cargo Pants",
      brand: "Adidas",
      price: 3499,
      imageUrl: "images/p7.avif"
  },
  {
      id: 8,
      name: "Men White Graphic T-shirt",
      brand: "Puma",
      price: 1499,
      imageUrl: "images/p8.avif"
  },
  {
      id: 9,
      name: "Men Brown Leather Jacket",
      brand: "H&M",
      price: 7999,
      imageUrl: "images/p9.avif"
  },
  {
      id: 10,
      name: "Men Green Sprts hoodie",
      brand: "Reebok",
      price: 899,
      imageUrl: "images/p10.avif"
  }
];

// Function to update cart count
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCount = document.getElementById('cart-count');
  cartCount.innerText = cart.length;
}

// Add to Cart Function
function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount(); // Update cart count without popup
}

// Example of dynamically generating product elements
function displayProducts() {
  const productGrid = document.getElementById('men-products');
  menProducts.forEach(product => {
      const productElement = document.createElement("div");
      productElement.classList.add("product-item");
      productElement.innerHTML = `
          <img src="${product.imageUrl}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Brand: ${product.brand}</p>
          <p>Price: Rs ${product.price}</p>
          <button class="add-to-cart" onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
      `;
      productGrid.appendChild(productElement);
  });
}

displayProducts();
updateCartCount(); // Initial count update on page load
