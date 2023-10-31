//Redirecting...
const logoImage = document.getElementById('lamp-logo');
const breakSounds = [
    document.getElementById('breakSound1'),
    document.getElementById('breakSound2'),
    document.getElementById('breakSound3'),
];
let clickCount = 0;

logoImage.addEventListener('click', () => {
    clickCount++;

    const soundToPlay = breakSounds[0];
    soundToPlay.play();

    if (clickCount >= 5) {
        window.location.href = "jpage.html";
    }
});

// Function to add an item to the shopping cart.

//Storage of products at cart.
var shoppingCart = [];

function addItemToCart(productName, productPrice) {
    const item = {
        name: productName,
        price: productPrice,
        qty: 1
    };
    shoppingCart.push(item);
}

// Function to update the shopping cart's subtotal.

function updateSubtotal() {
    let subtotal = 0;
    for (const item of shoppingCart) {
        subtotal += item.price;
    }
    return subtotal;
}

function addToCart(productName, productPrice) {
    addItemToCart(productName, productPrice);
    displayCart();
}

// Function to display the cart content and subtotal.
function displayCart() {
    const cartElement = document.querySelector('.basket');
    cartElement.innerHTML = '';

    for (const item of shoppingCart) {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - $${item.price} X ${item.qty} `;

        const removeBtn = document.createElement('img');
        removeBtn.src = "../Image/trash-icon.png";
        removeBtn.width = 20;
        removeBtn.alt = "Remove";
        removeBtn.addEventListener('click', () => removeItemFromCart(item))

        const decreaseBtn = document.createElement('img');
        decreaseBtn.src = "../Image/minus.png";
        decreaseBtn.width = 20;
        decreaseBtn.alt = "-";
        decreaseBtn.addEventListener('click', () => decreaseQuantity(item))

        const increaseBtn = document.createElement('img');
        increaseBtn.src = "../Image/plus.png";
        increaseBtn.width = 20;
        increaseBtn.alt = "+";
        increaseBtn.addEventListener('click', () => increaseQuantity(item))

        cartItem.appendChild(decreaseBtn);
        cartItem.appendChild(increaseBtn);
        cartItem.appendChild(removeBtn);
        cartElement.appendChild(cartItem);
    }

    const subtotal = updateSubtotal();
    const subtotalElement = document.querySelector('.total-price');
    subtotalElement.textContent = `$ ${subtotal.toFixed(2)}`;
}

function removeItemFromCart(item) {
    const index = shoppingCart.findIndex(item => item === itemToRemove);
    if (index !== -1) {
        shoppingCart.splice(index, 1);
        displayCart();
    }
}

function increaseQuantity(item) {
    const index = shoppingCart.findIndex(item => item === itemToIncrease);
    if (index !== -1) {
        shoppingCart[index].quantity++;
        displayCart();
    }
}

function decreaseQuantity(itemToDecrease) {
    const index = shoppingCart.findIndex(item => item === itemToDecrease);
    if (index !== -1) {
        shoppingCart[index].quantity--;
        if (shoppingCart[index].quantity === 0) {
            shoppingCart.splice(index, 1);
        }
        displayCart();
    }
}