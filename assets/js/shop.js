let cart = [];
let cartVisible = false;
let cartTotal = 0;

function toggleCartVisibility() {
  const cart = document.getElementById('cart');
  cartVisible = !cartVisible;
  if (cartVisible) {
    cart.classList.add('open');
  } else {
    cart.classList.remove('open');
  }
}

function addToCart(productName, price) {
  let existingItem = cart.find((item) => item.productName === productName);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ productName, price, quantity: 1 });
  }
  updateCart();
  cartVisible = true;
  document.getElementById('cart').style.display = 'block';
  document.getElementById('cart-icon').style.display = 'none';
  alert(productName + ' added to cart. Price: LKR ' + price);
}

function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  const emptyCartMessage = document.getElementById('empty-cart-message');
  let cartItemsHTML = '';

  cart.forEach((item) => {
    cartItemsHTML += `
        <li>
            <div class="product-name">${item.productName} - LKR ${item.price}</div>
            <div class="quantity">
                <button onclick="decreaseQuantity('${item.productName}')">-</button>
                <input type="text" value="${item.quantity}" readonly>
                <button onclick="increaseQuantity('${item.productName}')">+</button>
            </div>
            <button class="remove" onclick="removeFromCart('${item.productName}')">Remove</button>
        </li>`;
    cartTotal += item.price * item.quantity;
  });

  cartItemsElement.innerHTML = cartItemsHTML;
  cartTotalElement.textContent = cartTotal.toFixed(2);

  if (cart.length === 0) {
    emptyCartMessage.style.display = 'block';
  } else {
    emptyCartMessage.style.display = 'none';
  }
}

function increaseQuantity(productName) {
  let item = cart.find((item) => item.productName === productName);
  if (item) {
    item.quantity++;
    updateCart();
  }
}

function decreaseQuantity(productName) {
  let item = cart.find((item) => item.productName === productName);
  if (item && item.quantity > 1) {
    item.quantity--;
    updateCart();
  }
}

function removeFromCart(productName) {
  cart = cart.filter((item) => item.productName !== productName);
  updateCart();
}

function clearCart() {
  cart = [];
  cartTotal = 0;
  updateCart();
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty. Please add some items before checking out.');
  } else {
    document.getElementById('checkout').style.display = 'none';
    document.getElementById('user-details').style.display = 'block';
  }
}

function getUserDetails() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;

  if (!name.trim() || !email.trim() || !address.trim() || !phone.trim()) {
    alert(
      'Please enter your name, email, address and phone number before checking out.'
    );
  } else {
    document.getElementById('user-details').style.display = 'none';
    document.getElementById('payment-details').style.display = 'block';
    document.getElementById('sub-total').innerHTML = cartTotal;
  }
}

function toggleCartVisibility() {
  if (cartVisible) {
    document.getElementById('cart').style.display = 'none';
    document.getElementById('cart-icon').style.display = 'block';
  } else {
    document.getElementById('cart').style.display = 'block';
    document.getElementById('cart-icon').style.display = 'none';
  }
  cartVisible = !cartVisible;
}

function confirmPayment() {
  const cardNumber = document.getElementById('cardNumber').value;
  const expiryDate = document.getElementById('expiryDate').value;
  const cvv = document.getElementById('cvv').value;

  if (!cardNumber.trim() || !expiryDate.trim() || !cvv.trim()) {
    alert('Please fill in all card details before confirming payment.');
  } else {
    alert(
      `Payment confirmed! Thank you! An email has been sent to your email.`
    );
    document.getElementById('payment-details').style.display = 'none';
    document.getElementById('checkout').style.display = 'block';
    clearCart();
    toggleCartVisibility();
  }
}
